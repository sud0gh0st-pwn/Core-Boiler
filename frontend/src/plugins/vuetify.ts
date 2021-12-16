import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  },
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: true,
        colors: {
          background: '#FFE6EE',
          primary: '#FFB6C1',
          secondary: '#FFDBE9',
          surface: '#E2A5D4',
          success: '#AE99D5',
          warning: '#FFA500',
          info: '#ADD8E6',
          error: '#FF0000',
        },
        variables: {},
      }
    }
  }
})
