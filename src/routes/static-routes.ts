import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '~/layouts/index'
const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    name: 'index',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('~/pages/index.vue'),
        name: 'Home',
        meta: {
          title: 'Home',
        },
      },
      {
        path: '/workspace',
        component: () => import('~/pages/workspace/index.vue'),
        name: 'workspace',
        meta: {
          title: 'workspace',
        },
      },
    ],
  },
]

export default staticRoutes
