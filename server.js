const server = require('express')()
const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('./templates/index.template.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest
})

server.get('*', (req, res) => {
  renderer.renderToString((error, html) => {
    console.log('html', html)

    res.end(html)
  })
})

server.listen(8081)