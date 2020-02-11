import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// 导入moment
import moment from "moment";
//导入路由
import VueRouter from 'vue-router'
//挂载路由
Vue.use(VueRouter)

// 导入axios
import axios from "axios";
// 设置到Vue的原型上，那么所有Vue实例化出来的对象 和组件都能够共享这个属性
// 一般来说 设置到原型上的属性 Vue中 会使用$作为前缀，用来区分普通的属性
Vue.prototype.$axios = axios;

// 导入页面
import index from './components/index.vue'
import detail from './components/02-detail.vue'
// 导入样式
import './assets/statics/site/css/style.css'
// import meiRi from './components/meiRi.vue'
Vue.config.productionTip = false
// 路由规则
let routes = [
  // 路由重定向
  { path:'/',redirect:'/index'},  
  { path:'/index',component:index },
  { path:'/detail/:artId',component:detail },
  // { path:'/two',component:two }
]
// 实例化路由对象
let router = new VueRouter({
  routes
})

// 注册全局过滤器方便实用
Vue.filter('shortTime', value => {
  return moment(value).format("YYYY/MM/DD");
})
Vue.filter('shortTimePlut', value => {
  return moment(value).format("YYYY/MM/DD hh:mm:ss");
})



new Vue({
  render: h => h(App),
  // 传入路由对象
  router
}).$mount('#app')
