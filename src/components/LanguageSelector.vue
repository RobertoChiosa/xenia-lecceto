<script setup lang="ts">
import { setI18nLanguage } from '@/i18n'
import Button from 'primevue/button'

async function changeLanguage(language: string) {
  await setI18nLanguage(language)
}
</script>

<template>

  <Button
    v-if="$i18next.language === 'it'"
    class="btn btn-outline-secondary"
    @click.prevent="changeLanguage('en')"
  >
    <img src="@/assets/flags/it.svg?url" alt="Italiano" />
  </Button>
  <Button v-else class="btn btn-outline-secondary" @click.prevent="changeLanguage('it')">
    <img src="@/assets/flags/en.svg?url" alt="English" />
  </Button>
</template>
