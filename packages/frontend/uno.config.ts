import extractorPug from '@unocss/extractor-pug'
import { defineConfig, presetIcons, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons(),
  ],
  extractors: [
    extractorPug(),
  ],
})
