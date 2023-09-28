/** @type {import('tailwindcss').Config} */
const {defineConfig} = require('@translated/babele-react/tailwind')

module.exports = defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
})
