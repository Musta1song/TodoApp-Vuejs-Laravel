import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './index.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);




app.use(router).use(vuetify).use(VCalendar, {}).mount('#app')

