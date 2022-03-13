import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const constantRoutes:Array<RouteRecordRaw> = [
 {
    path: '/',
    component: () => import('@/views/home'),
 },
]

export const asyncRoutes:RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})

export default router;