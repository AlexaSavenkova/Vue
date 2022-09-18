import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../../pages/Dashboard'
import About from '../../pages/About'
import NotFound from '../../pages/NotFound'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: Dashboard
    },
    {
      // path: '/about',
      path: '/about*',
      name: 'about',
      component: About
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
  notfound: 'Not Found'
}
router.afterEach((to) => {
  document.title = titles[to.name]
})
export default router
