// Step 1: Create a Vue instance
const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./templates/index.template.html', 'utf-8')
})

const createApp = require('./app')


server.get('*', (req, res) => {
  const context = {
    url: req.url
  }

  const app = createApp(context)

  renderer.renderToString(app, (err, html) => {
    res.end(html)
  })
})

server.listen(8080)