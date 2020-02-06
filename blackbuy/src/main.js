import Vue from 'vue'
import App from './App.vue'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from './components/index.vue'
import './assets/statics/site/css/style.css'
import meiRi from './components/meiRi.vue'
Vue.config.productionTip = false

let routes = [
  { path:'/index',component:index },
  { path:'/meiRi',component:meiRi },
  // { path:'/two',component:two }
]

let router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
