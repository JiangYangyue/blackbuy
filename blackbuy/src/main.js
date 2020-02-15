import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI)

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入放大镜
// import imgZoom from 'vue2.0-zoom';
// Vue.use(imgZoom);

// 导入Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 导入放大镜
import ProductZoomer from 'vue-product-zoomer'
Vue.use(ProductZoomer)

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
// 使用axios的方式设置基础地址
axios.defaults.baseURL = 'http://134.175.59.248:8899';

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
  { path: '/', redirect: '/index' },
  { path: '/index', component: index },
  { path: '/detail/:artId', component: detail },

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


// 实例化Vuex
const store = new Vuex.Store({
  state:{
    cartData: JSON.parse(window.localStorage.getItem('hm36'))||{
      90:5,
      80:6
    }
  },

  // Vuex中的计算属性
  getters:{
    // 通过state获取 内部的数据
    // 计算并返回
    totalNum(state) {
      let num = 0;
      for (const key in state.cartData) {
        num+=state.cartData[key]
      }
      window.console.log(state);
      
      return num;
    }

  },
  // mutations: {
  //   increment (state) {
  //     state.count++
  //   }
  // }
  mutations: {
    add2Cart(start, obj) {
      if (this.state.cartData[obj.goodsId]!=undefined) {
        this.state.cartData[obj.goodsId] += obj.goodsNum;
        window.console.log(start)
      } else {
        // this.state.cartData[obj.goodsId] = obj.goodsNum;
        Vue.set(this.state.cartData,obj.goodsId,obj.goodsNum)
      }

    } 
  }
})


// 浏览器关闭时保存数据
window.onbeforeunload = function(){
  window.localStorage.setItem('hm36',JSON.stringify(store.state.cartData))
}

new Vue({
  render: h => h(App),
  // 传入路由对象
  router,
  // 需要把store传递给Vue实例 这样在子组件中才可以使用$store
  store
}).$mount('#app')
