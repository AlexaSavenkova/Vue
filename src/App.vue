<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <Calc />
<!--    <Calc v-if="show" :key="1"/>-->
<!--    <Calc v-if="!show" :key="2"/>-->
<!--    <button @click="show=!show">click</button>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Calc from '@/components/Calc.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Calc
  },
  data: () => ({
    counter: 0,
    txt: '',
    show: true
  }),
  methods: {
    increase (step, event) {
      console.log(event)
      this.counter += step
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
