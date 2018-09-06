// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Auth from './assets/packages/auth/Auth'
import VueResource from 'vue-resource'




Vue.config.productionTip = false

// import Bootstrap from "bootstrap"
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css"

Vue.use(Bootstrap)

import VueToastr from '@deveodk/vue-toastr'
Vue.use(VueToastr, {
  defaultPosition: 'toast-top-right',
  defaultType: 'info',
  defaultTimeout: 3000
})

Vue.use(VueResource)
Vue.use(Auth)
/* eslint-disable no-new */
Vue.http.options.root = 'http://devlop-backend.com'
Vue.http.headers.common['authorization'] = 'Bearer ' + Vue.auth.getToken()

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.forVisitor)) {
    if (Vue.auth.isAuthenticated()) {
      next({
        path: '/feed'
      })

    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.forAuth)) {
    if (!Vue.auth.isAuthenticated()) {
      next({
        path: '/login'
      })

    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
