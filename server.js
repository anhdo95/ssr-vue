const server = require('express')()
const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('./public/index.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest
})

server.get('*', (req, res) => {
  const context = { url: req.url }

  renderer.renderToString(context)
    .then((html) => {
      console.log('html', html)

      res.end(html)
    })
    .catch(error => {
      res.status(error.statusCode || 500).end(error.message || 'Internal Server Error!')
    })
})

server.listen(8081)