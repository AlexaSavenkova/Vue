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
      <ModalWindow
        v-if="showModal"
        :settings="modalSettings"
      />
    </transition>
    <transition name="fade">
      <ContextMenu
        v-if="showContext"
        :settings="contextSettings"
      />
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ModalWindow from '@/components/ModalWindow.vue'
import ContextMenu from '@/components/ContextMenu'

export default {
  name: 'App',
  components: {
    ModalWindow,
    ContextMenu
  },
  data: () => ({
    showModal: false,
    modalSettings: {},
    showContext: false,
    contextSettings: {}
  }),
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    modalOpen (settings) {
      this.modalSettings = settings
      this.showModal = true
    },
    modalClose () {
      this.showModal = false
    },
    contextOpen (settings) {
      this.contextSettings = settings
      this.showContext = true
    },
    contextClose () {
      this.showContext = false
    }
  },
  mounted () {
    this.fetchData()
    this.fetchCategoryData()
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
    this.$contextMenu.EventBus.$on('show', this.contextOpen)
    this.$contextMenu.EventBus.$on('hide', this.contextClose)
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
