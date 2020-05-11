# ssr-vue

### Hydration
Hydration refers to the client-side process during which Vue takes over the static HTML sent by the server and turns it into dynamic DOM that can react to client-side data changes. ... In development mode, Vue will assert the client-side generated virtual DOM tree matches the DOM structure rendered from the server.

### Code Structure with webpack
src
├── components
│   ├── Foo.vue
│   ├── Bar.vue
│   └── Baz.vue
├── App.vue
├── app.js # universal entry
├── entry-client.js # runs in browser only
└── entry-server.js # runs on server only