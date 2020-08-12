import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-design-lite/material.min.js'
import 'material-design-lite/material.css'
import vueHeadful from 'vue-headful';
import chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(chartkick.use(Chart))

Vue.component('vue-headful', vueHeadful);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
