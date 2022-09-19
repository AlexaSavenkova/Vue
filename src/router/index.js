import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../../pages/Dashboard'
import About from '../../pages/About'
import NotFound from '../../pages/NotFound'
import AddPayment from '../../pages/AddPayment'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: {
        name: 'dashboard'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    // {
    //   path: '/dashboard/:page',
    //   name: 'dashboard',
    //   component: Dashboard
    // },
    {
      // path: '/about',
      path: '/about*',
      name: 'about',
      component: About
    },
    {
      path: '/add/payment',
      name: 'add_payment',
      component: AddPayment,
      children: [
        {
          path: ':category',
          component: AddPayment
        }
      ]
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFound
    },
    // {
    //   path: '*',
    //   component: NotFound
    // }
    {
      path: '*',
      // redirect: '/notfound'
      redirect: {
        name: 'notfound'
      }
    }
  ]
})

// const user = true
//
// router.beforeEach((to, from, next) => {
//   if (!user && to.name !== 'notfound') next({ name: 'notfound' })
//   else next()
// })

const titles = {
  dashboard: 'Dashboard',
  about: 'About',
  add_payment: 'Add Payment',
  notfound: 'Not Found'
}
router.afterEach((to) => {
  document.title = titles[to.name]
})
export default router
