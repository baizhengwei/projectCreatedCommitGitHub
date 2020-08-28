import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*promise.all()*/
//1.用的全局得 axios
/*axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout=5000

axios({
  url:"/home/multidata",
  method:"get"
}).then(result=>{
  console.log(result);
})*/

//2.单独创建实例
const axiosInstancel= axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:4000
})

axiosInstancel({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
})