// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { VTimePicker } from 'vuetify/labs/VTimePicker'
import { VCalendar } from 'vuetify/labs/VCalendar'



export default createVuetify(
  {
    components: {
      VTimePicker,
      VCalendar
    },
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)

