import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import(/* webpackChunkName: "posts" */ './views/Posts.vue')
    },
    {
      path: '/createpost',
      name: 'createpost',
      component: () => import(/* webpackChunkName: "createpost" */ './views/CreatePost.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/images',
      name: 'images',
      component: () => import(/* webpackChunkName: "images" */ './views/Images.vue')
    },
    {
      path: '/randomposts',
      name: 'randomposts',
      component: () => import(/* webpackChunkName: "randomposts" */ './views/RandomPosts.vue')
    }
  ]
})
