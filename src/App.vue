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
    <transition name="fade">
      <ModalWindowAddPayment
        v-if="showModal"
        :settings="modalSettings"
      />
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import ModalWindowAddPayment from '@/components/ModalWindowAddPayment.vue'
export default {
  name: 'App',
  components: {
    ModalWindowAddPayment: () => import(/* webpackChunkName: "ModalWindow" */'@/components/ModalWindowAddPayment.vue')
  },
  data: () => ({
    showModal: false,
    modalSettings: {}
  }),
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    modalOpen (settings) {
      this.modalSettings = settings
      this.showModal = true
    },
    modalClose () {
      this.showModal = false
    }
  },
  mounted () {
    this.fetchData()
    this.fetchCategoryData()
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
