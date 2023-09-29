import tailwind from '@astrojs/tailwind'
import {defineConfig} from 'astro/config'
import nodejs from '@astrojs/node'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: nodejs({mode: 'standalone'}),
  integrations: [tailwind({applyBaseStyles: false}), react()],
})
