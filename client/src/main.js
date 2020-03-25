import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import { sync } from 'vuex-router-sync'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

sync(store, router)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
