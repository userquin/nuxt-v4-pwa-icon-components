import { addVitePlugin, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  setup(_options, nuxt) {
      /*addVitePlugin({
          name: 'check',
          enforce: 'pre',
          configResolved(config) {
              console.log(config.env, config.ssr, config.root)
          }
      })
      console.log(nuxt.options.dir.public)
      /!*nuxt.hook('nitro:init', (nitro) => {
          console.log(nitro.options.)
      })*!/
      console.log(nuxt.options.nitro.publicAssets)*/
  }
})