<template>
  <div id="app">
    <header class="header">
      <nav>
        <router-link to="dashboard" class="router-link">Dashboard</router-link>
        <router-link to="about" class="router-link">About</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    // page: 'dashboard'
  }),
  methods: {
    ...mapActions(['fetchData'])
  },
  mounted () {
    this.fetchData()
    // window.addEventListener('hashchange', this.setPage)
    // window.addEventListener('popstate', this.setPage)
    // console.log(this.$router)
    // console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.router-link {
  margin: 0 5px;
}
</style>
