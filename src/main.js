import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';

Vue.config.productionTip = false
Vue.use(VCalendar);

new Vue({
  render: h => h(App),
}).$mount('#app')
