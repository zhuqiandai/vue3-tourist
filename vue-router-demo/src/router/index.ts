import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home',
    props: true,
    beforeEnter: () => {
      console.log('HOme')
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: [],
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: () => import('../views/DashBoard.vue'),
  },
  {
    path: '/users/:id',
    name: 'Users',
    component: () => import('../views/Users.vue'),
    children: [
      { path: 'profile', name: 'Profile', component: () => import('../views/Profile.vue') },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
