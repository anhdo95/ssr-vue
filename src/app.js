import Vue from 'vue'
import App from './App.vue'

// export a factory function for creating fresh app, router and store
// instances
export function createApp() {
  const app = new Vue({
    render: h => h(App)
  })

  return { app }
}