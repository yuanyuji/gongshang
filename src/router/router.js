import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Admin from '../components/admin.vue'

//首页
import FirstPage from '../views/firstPage.vue'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/firstPage',
      name: 'FirstPage',
      component: FirstPage,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.name == 'unload') {
//     next()
//   }else {
//     if (getCookie('token')) {
//       next()
//     }else{
//       next('/unload')
//     }
//   }
// })

export default router