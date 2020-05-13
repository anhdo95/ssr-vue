import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: 'Home' */ '@/components/Home.vue')
const Posts = () => import(/* webpackChunkName: 'Posts' */ '@/components/Posts.vue')

Vue.use(Router)

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/posts', component: Posts }
    ]
  })
}