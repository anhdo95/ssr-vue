// Step 1: Create a Vue instance
const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./templates/index.template.html', 'utf-8')
})


server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })

  renderer.renderToString(app, (err, html) => {
    console.log('html', html)

    res.end(html)
  })
})

server.listen(8080)