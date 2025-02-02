import { nextTick } from 'vue'
import type { App } from 'vue'
import type { Router } from 'vue-router'
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import resourcesToBackend from 'i18next-resources-to-backend'
// import axios from '@/lib/axios'

export const DEFAULT_LOCALE =
  window.localStorage.getItem('locale') || window.navigator.language.substr(0, 2)
const DEFAULT_LANGUAGE = 'en'
const ALLOWED_LANGUAGES = ['en', 'it']

const isLanguageAllowed = (locale: string) => ALLOWED_LANGUAGES.includes(locale)

const loadTranslations = async (locale: string, namespace: string) => {
  try {
    const translations = await import(
      /* webpackChunkName: "locale-[request]" */ `./locales/${locale}/${namespace}.json`
    )

    i18next.addResourceBundle(locale, namespace, translations.default)
  } catch (error) {
    console.error(`🔴 No translation file found for ${locale}/${namespace}`, error)
  }
}

export const loadDefaultTranslations = async (locale = DEFAULT_LOCALE) => {
  await Promise.all([
    loadTranslations(locale, 'common'),
    // loadTranslations(locale, 'misc')
  ])
}

export const setI18nLanguage = async (locale: string) => {
  await i18next.changeLanguage(locale)
  console.log(`🌍 Setting locale to ${locale}`)
  // update index and axios locales
  // axios.defaults.headers.common['Accept-Language'] = locale
  document.querySelector('html')?.setAttribute('lang', locale)
  window.localStorage.setItem('locale', locale)
}

export const loadLocaleMessages = async (namespace: string, locale?: string) => {
  if (!locale) {
    locale = i18next.language

    if (!isLanguageAllowed(locale)) {
      locale = DEFAULT_LANGUAGE
      i18next.language = DEFAULT_LANGUAGE
    }
  }

  await loadDefaultTranslations(locale)

  if (!namespace) {
    console.error('🔴 No namespace provided for this location.')
    return nextTick()
  }

  console.log(`🌎 Loading locale messages for ${locale}/${namespace}`)
  // load locale messages with dynamic import
  await loadTranslations(locale, namespace)

  return nextTick()
}

export const useI18nLoader = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    const translationNamespace = to.name as string
    await loadLocaleMessages(translationNamespace)
    return next()
  })
}

i18next
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      if (namespace !== 'translation' && language !== 'dev') {
        return import(`./locales/${language}/${namespace}.json`)
      }
    }),
  )
  .init({
    lng: DEFAULT_LOCALE,
    defaultNS: 'common',
    partialBundledLanguages: true,
    resources: {},
    debug: true,
  })

export default function setupI18n(app: App) {
  app.use(I18NextVue, {
    i18next,
    rerenderOn: ['languageChanged', 'loaded'],
  })
}
