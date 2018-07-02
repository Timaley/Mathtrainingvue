import Vue from 'vue'
import App from './App.vue'

import AppMessage from './components/message.vue'
import AppQuestion from './components/question.vue'
import AppResult from './components/result.vue'
import AppStartScreen from './components/StartScreen.vue'

Vue.component('AppMessage',AppMessage);
Vue.component('AppQuestion',AppQuestion);
Vue.component('AppResult',AppResult);
Vue.component('AppStartScreen',AppStartScreen);

new Vue({
  el: '#app',
  render: h => h(App)
})
