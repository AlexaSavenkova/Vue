<template>
  <div :style="styleObject" :class="this.$style.contextMenu">
    <button :class="this.$style.menuBtn" @click="editPayment(settings.index)">Edit</button>
    <button :class="this.$style.menuBtn" @click="deletePayment(settings.index)">Delete</button>
    <button :class="this.$style.menuBtn" @click="close">Close</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ContextMenu',
  data: () => ({
    styleObject: {
      top: '0px',
      left: '0px'
    }
  }),
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapMutations(['DELETE_PAYMENT']),
    close () {
      this.$contextMenu.hide()
    },
    deletePayment (index) {
      this.DELETE_PAYMENT(index)
      this.$contextMenu.hide()
    },
    editPayment (index) {
      this.$modal.show({ title: 'Edit Payment', content: 'editPaymentForm', index })
      this.$contextMenu.hide()
    }
  },
  created () {
    this.styleObject.top = this.settings.top + 'px'
    this.styleObject.left = this.settings.left + 'px'
  }
}
</script>

<style module>
.contextMenu {
  display: flex;
  flex-direction: column;
  position: absolute;
}
.menuBtn {
  width: 80px;
}
</style>
