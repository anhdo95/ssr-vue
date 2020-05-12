import Vue from 'vue'
import Router from 'vue-router'

import Posts from '@/components/Posts.vue'

Vue.use(Router)

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/posts', component: Posts }
    ]
  })
}