import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import vuetify from './plugins/vuetify'
import router from './router'

createApp(App).use(router).use(vuetify).mount('#app')

