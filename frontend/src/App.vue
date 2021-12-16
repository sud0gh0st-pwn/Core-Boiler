<template>
  <v-app :theme="myCustomTheme">
    <Navigation/>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navigation from './components/Base/Navigation.vue'
import Footer from './components/Base/Footer.vue'
export default {
  name: 'App',

  components: {
    Navigation,
    Footer,
  },

  data: () => ({
  }),
}
</script>
