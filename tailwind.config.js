/** @type {import('tailwindcss').Config} */
import primeui from 'tailwindcss-primeui'

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'ui-text-primary': '#203036',
                'ui-text-secondary': '#515d61',
                'ui-text-tertiary': '#8f979a',
                'ui-text-link': '#203036',
                'ui-text-success': '#5cc689',
                'ui-text-error': '#EA4243',
                'ui-el-tertiary-lt': '#e8ebee',
                'ui-el-tertiary': '#8F979A',
                'ui-el-neutral': '#c6c6c6',
                'ui-el-neutral-lt': '#e4e4e4',
                'brand-primary': '#203036',
                'brand-secondary': '#3f5f6b',
                'brand-green': '#66BB6A',
                'brand-orange': '#ffb13d',
                'brand-red': '#EA4243',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                adieu: ['Adieu', 'sans-serif'],
            },
        },
    },
    plugins: [primeui],
}
