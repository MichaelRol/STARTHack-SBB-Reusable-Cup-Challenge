import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from '@/components/Dashboard'
// import UserScan from '@/components/UserScan'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Dashboard',
      // component: Dashboard
      // name: 'UserScan',
      // component: UserScan
      name: 'Home',
      component: Home
    }
  ]
})
