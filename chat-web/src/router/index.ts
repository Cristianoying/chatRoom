import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const constantRoutes:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/chat/index.vue'),
  },
  {
    path: '/mine',
    component: () => import('@/views/mine/index.vue')
  }
]

export const asyncRoutes:RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})

export default router;