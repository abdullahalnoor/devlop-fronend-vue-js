import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Feed from '@/components/Feed'
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import CreateForm from "../components/product/Create"
import EditForm from "../components/product/Edit"
import Cart from "../components/product/Cart"
import Detail from "../components/product/Detail"
import Category from '../components/category/Category'
import CategoryProduct from '../components/product/CategoryProduct'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      meta: {
        forVisitor: true
      }
    },
    {
      path: '/register',
      component: Register,
      name: 'register',
      meta: {
        forVisitor: true
      }
    },
    {
      path: '/feed',
      component: Feed,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/product/create',
      // component: require('../components/product/Create.vue'),
      component: CreateForm,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/product/:id/edit',
      component: EditForm,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/product/detail/:id/:name',
      component: Detail,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/category/product/:id/:type',
      component: CategoryProduct,
      name: 'categoryProduct',
      meta: {
        forAuth: true
      }
    }

  ],
  linkActiveClass: 'active',
  mode: 'history'
})
