<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
      dark
      flat
    >
      <div class="d-flex align-center">
        <v-btn to="/dashboard" :ripple="false" plain>Dashboard</v-btn>
        <v-btn to="/about" :ripple="false" plain>About</v-btn>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data: () => ({
  }),
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData'])
  },
  mounted () {
    this.fetchData()
    this.fetchCategoryData()
  }
}
</script>
<style lang="scss" scoped>
</style>
