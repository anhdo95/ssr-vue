import { createApp } from './app'

export default function(context) {
  // since there could potentially be asynchronous route hooks or components,
  // we will be returning a Promise so that the server can wait until
  // everything is ready before rendering.
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    router.push(context.url)

    router.onReady(() => {
      
      const matchedComponents = router.getMatchedComponents()

      if (!matchedComponents.length) {
        const error = new Error('Page not found!')
        error.statusCode = 404

        return reject(error)
      }

      resolve(app)

    }, reject)
  })
}