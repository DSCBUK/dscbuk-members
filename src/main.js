import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
  .then(function(reg) {
    // registration worked
    console.log('Service Worker Registration succeeded.');
  }).catch(function(error) {
    // registration failed
    console.log('Service Worker Registration succeeded.');
  });
}