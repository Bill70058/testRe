import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:1234'
new Vue({
  el: '#app',
  render: h => h(App)
})
