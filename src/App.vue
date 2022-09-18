<template>
  <div id="app">
    <header class="header">
<!--      <nav @click.prevent="pushHistory($event)">-->
      <nav>
<!--        <a href="/#dashboard" class="router-link">Dashboard</a>-->
<!--        <a href="/#about" class="router-link">About</a>-->
<!--        <a href="/#notfound" class="router-link">Not Found</a>-->
<!--        <a href="/dashboard" class="router-link">Dashboard</a>-->
<!--        <a href="/about" class="router-link">About</a>-->
<!--        <a href="/notfound" class="router-link">Not Found</a>-->
        <router-link to="dashboard" class="router-link">Dashboard</router-link>
        <router-link to="about" class="router-link">About</router-link>
        <router-link to="notfound" class="router-link">Not Found</router-link>
      </nav>
    </header>
    <main>
<!--      <About v-if="page==='about'"/>-->
<!--      <NotFound v-if="page==='notfound'"/>-->
<!--      <Dashboard v-if="page==='dashboard'"/>-->
      <router-view />
      <button @click="goToPage">About</button>
    </main>
  </div>
</template>

<script>
// import About from '../pages/About'
// import NotFound from '../pages/NotFound'
// import Dashboard from '../pages/Dashboard'

export default {
  name: 'App',
  components: {
    // About,
    // Dashboard,
    // NotFound
  },
  data: () => ({
    // page: 'dashboard'
  }),
  methods: {
    goToPage () {
      // this.$router.push('about')
      this.$router.push({
        name: 'about',
        params: {
          a: 'qwerty'
        }
      })
    }
    // setPage () {
    //   // this.page = window.location.hash.slice(1)
    //   this.page = window.location.pathname.slice(1)
    //   console.log(this.page)
    // },
    // pushHistory (e) {
    //   if (!e.target.classList.contains('route-link')) return
    //   window.history.pushState({}, '', e.target.href)
    //   this.setPage()
    // }
  },
  mounted () {
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
