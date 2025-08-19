import { addVitePlugin, defineNuxtModule } from 'nuxt/kit'
import {
  addComponent,
  addDevServerHandler,
  addPlugin,
  createResolver,
  extendWebpackConfig,
  getNuxtVersion,
addTypeTemplate,
} from 'nuxt/kit'

export default defineNuxtModule({
  setup(_options, nuxt) {
    /*nuxt.hook('prepare:types', (options) => {
      options.
    })*/
    /*addTypeTemplate({
      getContents(data) {

      },
    })*/
    const resolver = createResolver(import.meta.url)
    console.log(resolver.resolve(nuxt.options.rootDir))
    // nuxt.options.alias['#build/pwa-icons/PwaTransparentImage.js'] = resolver.resolve(nuxt.options.buildDir, 'pwa-icons/PwaTransparentImage.d.ts')
    console.log(resolver.resolve(nuxt.options.srcDir))
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