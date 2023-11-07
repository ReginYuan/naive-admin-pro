import type { RouteRecordRaw } from 'vue-router'
const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('~/pages/index.vue'),
    name: 'index',
    meta: {
      title: '首页',
    },
  },
  {
    path: '/workspace',
    component: () => import('~/pages/workspace/index.vue'),
    name: 'workspace',
  },
]

export default staticRoutes
