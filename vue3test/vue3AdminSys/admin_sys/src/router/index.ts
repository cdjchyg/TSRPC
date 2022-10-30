import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:"goods",
    children:[
      {
        path:"goods",
        name:"goods",
        meta:{
          isShow:true,
          title:"商品列表",
        },
        component: () => import(/* webpackChunkName: "goods" */ '../views/GoodsView.vue')
      },
      {
        path:"User",
        name:"User",
        meta:{
          isShow:true,
          title:"用户列表"
        },
        component: () => import(/* webpackChunkName: "User" */ '../views/UserView.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  const token:string|null = localStorage.getItem("token")
  if(!token && to.path !=="/login") {
    next("/login")
  }else{
    next()
  }
})

export default router
