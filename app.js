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

  context = {
    title: 'SSR Vue Practice',
    meta: `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    `
  }

  renderer.renderToString(app, context, (err, html) => {
    console.log('html', html)

    res.end(html)
  })
})

server.listen(8080)