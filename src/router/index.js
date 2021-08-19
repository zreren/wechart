import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Explore = () => import('../views/Explore.vue')
const Edit = () => import('../views/Edit.vue')
const Community = () => import('../views/Community.vue')
const ShareDetail = () => import('../views/ShareDetail.vue')
const BlogDetail = () => import('../views/BlogDetail')
const Login = () => import('../views/Login.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component:Explore
  },
  {
    path: '/edit',
    name: 'Edit',
    component:Edit
  },
  {
    path: '/community',
    name: 'Community',
    component:Community
  },
  {
    path: '/share/detail',
    name: 'ShareDetail',
    component:ShareDetail
  },
  {
    path: '/blog/detail',
    name: 'BlogDetail',
    component:BlogDetail
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
