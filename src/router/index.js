import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { ElMessage } from 'element-plus'
import { ElMessageBox } from 'element-plus'
const Explore = () => import('../views/Explore.vue')
const Edit = () => import('../views/Edit.vue')
const Community = () => import('../views/Community.vue')
const ShareDetail = () => import('../views/ShareDetail.vue')
const BlogDetail = () => import('../views/BlogDetail')
const Login = () => import('../views/Login.vue')
const ChartType = () => import('../components/Edit/ChartType.vue')
const ChartEdit = () => import('../components/Edit/ChartEdit.vue')
const body = ()=>import('../components/Explorechild/body.vue')
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
    children:[
      {
        path: '/explore/:str',
        naem: "all",
        component:body
      }
    ]
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
          path: '/edit/chart/edit',
          name: 'ChartEdit',
          component:ChartEdit,
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
    path: '/blog/detail',
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
  if(from.name === 'ChartType' || from.name === 'ChartEdit')
  {
    if(to.name !== 'ChartType' && to.name !== 'ChartEdit')
    {
      try{
        await ElMessageBox.confirm('此操作将清空当前修改,是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
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
