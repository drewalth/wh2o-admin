import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { localStoreWorker } from '@/services'

// Routes
import PagesRoutes from './pages.routes'
import UsersRoutes from './users.routes'
import ReachesRoutes from './reaches.routes'
import ArticlesRoutes from './articles.routes'

Vue.use(Router)

export const routes = [{
  path: '/',
  redirect: '/dashboard/analytics'
}, {
  path: '/dashboard/analytics',
  name: 'dashboard-analytics',
  component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/dashboard/DashboardPage.vue')
},
...PagesRoutes,
...UsersRoutes,
...ReachesRoutes,
...ArticlesRoutes,
{
  path: '/blank',
  name: 'blank',
  component: () => import(/* webpackChunkName: "blank" */ '@/pages/BlankPage.vue')
},
{
  path: '*',
  name: 'error',
  component: () => import(/* webpackChunkName: "error" */ '@/pages/error/NotFoundPage.vue'),
  meta: {
    layout: 'error'
  }
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes
})

/**
 * Before each route update
 */
router.beforeEach((to, from, next) => {
  if (!store.getters['User/isAuthenticated'] && !to.path.includes('auth')) {

    const { uid } = JSON.parse(localStoreWorker.get('wh2o-admin-auth'))

    if (uid) {
      store.dispatch('User/getProperty', {
        url: `/user?uid=${uid}`,
        key: 'user'
      })

      return next()
    } else {
      return next('/auth/signin')
    }
  } else {
    return next()
  }
})

/**
 * After each route update
 */
router.afterEach((to, from) => {
})

export default router
