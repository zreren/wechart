import { createRouter, createWebHistory } from 'vue-router'
import state from '../store/state'
import Home from '../views/Home.vue'
import { ElMessage } from 'element-plus'
import { ElMessageBox } from 'element-plus'
const Explore = () => import('../views/Explore.vue')
const Edit = () => import('../views/Edit.vue')
const Community = () => import('../views/Community.vue')
const ShareDetail = () => import('../views/ShareDetail.vue')
const BlogDetail = () => import('../views/BlogDetail')
const Writing = () => import('../views/Writing')
const Login = () => import('../views/Login.vue')
const ChartType = () => import('../components/Edit/ChartType.vue')
const ChartTheme = () => import('../components/Edit/ChartTheme.vue')
const ChartUpload = ()=>import('../components/Edit/ChartUpload.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component:Explore,
   
  },
  {
    path: '/writing',
    name: 'writing',
    component: Writing
  },
  {
    path: '/edit',
    name: 'Edit',
    component:Edit,
    children:[
        {
          path: '/edit',
          name: 'ChartType',
          component:ChartType,
        },
        {
          path: '/edit/theme',
          name: 'ChartTheme',
          component:ChartTheme,
        },
        {
          path: '/edit/upload',
          name: 'CharUpload',
          component:ChartUpload,
        }
    ],
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
    path: '/blog/detail/:id',
    name: 'BlogDetail',
    component:BlogDetail,
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

router.beforeEach(async (to,from)=>{
  if(from.name === 'ChartType' || from.name === 'ChartTheme')
  {
    if(to.name !== 'ChartType' && to.name !== 'ChartTheme')
    {
      try{
        await ElMessageBox.confirm('此操作将清空当前修改,是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
      state.preChartType = 'other'
      return true
      }
      catch(err) {
        ElMessage({
          type:'info',
          message:'已取消跳转'
        })
        return false
      }
    }
  }
  return true
})

export default router
