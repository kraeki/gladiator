import Vue from 'vue'
import Router from 'vue-router'
import Root from './Root.vue'
import Show from './Show.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    }
  ]
})

