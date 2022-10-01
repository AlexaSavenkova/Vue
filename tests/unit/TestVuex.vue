<template>
  <div>
    <input type="text" v-model="props">
    <button @click="save">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TestVuex',
  data: () => {
    return {
      props: ''
    }
  },
  methods: {
    ...mapActions(['addData']),
    save () {
      const { prop } = this
      this.addData(prop)
    }
  }
}
</script>
