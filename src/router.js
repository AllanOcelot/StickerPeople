import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

//Accounts
import Login from './views/account/Login.vue'

//Misc Pages
import PageNotFound from './views/misc/pageNotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '*',
        name: '404',
        component: PageNotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
