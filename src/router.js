import Vue from 'vue'
import Router from 'vue-router'

import EmptyLayout from '@/layouts/EmptyLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import LoginPage from '@/pages/LoginPage.vue'
import DashboardOverviewPage from '@/pages/DashboardOverviewPage.vue'
import DashboardStatsPage from '@/pages/DashboardStatsPage.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: EmptyLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginPage,
          meta: {
            title: 'Login'
          }
        }
      ]
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      meta: {
        title: 'Dashboard'
      },
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: DashboardOverviewPage,
          meta: {
            title: 'Overview'
          }
        },
        {
          path: 'stats',
          name: 'stats',
          component: DashboardStatsPage,
          meta: {
            title: 'Stats'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
