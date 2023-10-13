import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'
import About from '@/views/about/index.vue'
import Notice from '@/views/notice/index.vue'
import NoticeDetail from '@/views/notice/detail/index.vue'

/***
 *
 * meta: {
 *     layout: 'DefaultLayout' | 'AnotherLayout' // 레이아웃을 나눠야 할 때 사용
 * }
 *
 */
export const Routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      layout: 'AnotherLayout'
    }
  },
  {
    path: '/notice',
    name: 'notice',
    component: Notice
  },
  {
    path: '/notice/:id',
    name: 'NoticeDetail',
    component: NoticeDetail
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
