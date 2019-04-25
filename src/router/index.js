import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
// const Index = resolve => require(['@/views/Index.vue'], resolve)
// import Index from '@/views/Index.vue';
// const Category = resolve => require(['@/views/Category.vue'], resolve)
// const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
// const Blog = resolve => require(['@/views/Blog.vue'],resolve)
// const Content = resolve =>require(['@/views/Content.vue'],resolve)
// const Car = resolve =>require(['@/views/Car.vue'],resolve)
// const User = resolve => require(['@/views/User.vue'], resolve)
// const Detail = resolve => require(['@/views/Detail.vue'], resolve)
// const Search = resolve => require(['@/views/Search.vue'], resolve)
// const Pay = resolve => require(['@/components/blog/pay/pay.vue'], resolve)
// const Login = resolve => require(['@/views/login.vue'], resolve)
// const BlogContent = resolve => require(['@/views/BlogContent'],resolve)
// const Order = resolve => require('@/views/Order',resolve)

export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: ()=>import('@/views/Index.vue')
    },
    {
      path: '/category',
      name: '分类页',
      redirect: '/category/all',
      component: ()=>import('@/views/Category.vue'),
      children: [{
        path: '/category/:tab',
        component:()=>import('@/components/category/main.vue')
      }]
    }, {
      path: '/blog',
      name: '社区页',
      component: ()=>import('@/views/Blog.vue')
    }, {
      path: '/blog/pay',
      name: '支付页',
      component: ()=>import('@/components/blog/pay/pay.vue')
    },
    {
      path: '/user',
      name: '用户页',
      component: ()=>import('@/views/User.vue'),
      meta:{
        requireAuth: true,
      }
    }, {
      path: '/detail',
      name: '详情页',
      component: ()=>import('@/views/Detail.vue')
    }, {
      path: '/search',
      name: '搜索页',
      component: ()=>import('@/views/Search.vue')
    },{
      path: '/login',
      name: '登录页',
      component: ()=>import('@/views/login.vue')
    },{
      path: '/register',
      name: '注册页',
      component: ()=>import('@/views/register.vue')
    },{
      path:'/car',
      name:'购物车页',
      component:()=>import('@/views/Car.vue')
    },{
      path:'/content',
      name:'内容页',
      component:()=>import('@/views/Content.vue')
    },{
      path:'/blogContent/:aid',
      name:'社区详情页',
      component:()=>import('@/views/BlogContent')
    },
    {
      path:'/package',
      name:'装机服务',
      component:()=>import('@/views/package')
    },
    {
      path:'/order',
      name:'订单增加',
      component:()=>import('@/views/order1')
    }
  ]
})
