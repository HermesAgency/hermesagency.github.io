/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Oxygen', ...defaultTheme.fontFamily.sans],
                header: ['Exo', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['synthwave'],
    },
}
