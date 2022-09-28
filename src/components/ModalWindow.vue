<template>
    <div :class="$style.wrapper">
      <div :class="$style.content">
        <h3>{{ title }}</h3>
          <AddPaymentForm v-if="settings.content === 'addPaymentForm'"
            @add-payment="addPayment"
            :categoryList="categoryList"
          />
        <Auth v-if="settings.content === 'auth'"/>
        <EditPaymentForm v-if="settings.content === 'editPaymentForm'"
                         :index="settings.index"
        />
        <button @click="close" :class="$style['close-btn']">Close</button>
      </div>
    </div>
</template>

<script>
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import Auth from '@/components/Auth.vue'
import EditPaymentForm from '@/components/EditPaymentForm'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ModalWindowAddPayment',
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    AddPaymentForm,
    Auth,
    EditPaymentForm
  },
  computed: {
    ...mapGetters(['categoryList']),
    title () {
      return this.settings?.title || 'Modal window'
    },
    index () {
      return this.settings?.index || null
    }
  },
  methods: {
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment (data) {
      this.ADD_PAYMENT_DATA(data)
      this.$modal.hide()
    },
    close () {
      this.$modal.hide()
    }
  }
}
</script>

<style module>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
}
h3 {
  text-align: center;
}
.content {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
}
.close-btn {
  margin-left: 20px;
}
</style>
