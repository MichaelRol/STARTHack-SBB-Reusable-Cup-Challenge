import Vue from 'vue'
import Router from 'vue-router'
import Assigned from '@/components/Assigned'
import Bought from '@/components/Bought'
import CupScan from '@/components/CupScan'
import Dashboard from '@/components/Dashboard'
import Home from '@/components/Home'
import UserScan from '@/components/UserScan'
// import 'vue-qr-reader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/assigned',
      name: 'Assigned',
      component: Assigned
    },
    {
      path: '/bought',
      name: 'Bought',
      component: Bought
    },
    {
      path: '/cupscan',
      name: 'CupScan',
      component: CupScan
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/userscan',
      name: 'UserScan',
      component: UserScan
    }
  ]
})
