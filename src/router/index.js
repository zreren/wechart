import { createRouter, createWebHistory } from 'vue-router'
import state from '../store/state'
import Home from '../views/Home.vue'
import { ElMessage } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import { cahrtTemplate } from '../common/chart/chart' 
import { bar } from '../common/chart/all/bar'
import { line } from '../common/chart/all/line'
import { pie } from '../common/chart/all/pie'
import { scatter } from '../common/chart/all/scatter'
import deepClone from '../common/deepClone'

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
    if(to.name !== 'ChartType' && to.name !== 'ChartTheme' && to.name !== 'CharUpload')
    {
      try{
        await ElMessageBox.confirm('??????????????????????????????,?????????????', '??????', {
        confirmButtonText: '??????',
        cancelButtonText: '??????',
        type: 'warning',
      })
      state.preChartType = 'other'
      return true
      }
      catch(err) {
        ElMessage({
          type:'info',
          message:'???????????????'
        })
        return false
      }
    }
  }
  if(from.name === 'Home' && (to.name === 'ChartType' || to.name === 'Edit')) {
    state.preChartType = 'other'
    cahrtTemplate.bar = deepClone(bar)
    cahrtTemplate.line = deepClone(line)
    cahrtTemplate.pie = deepClone(pie)
    cahrtTemplate.scatter = deepClone(scatter)
  }
  return true
})

export default router
