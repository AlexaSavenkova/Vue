<template>
  <div>
    <table>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
      </tr>
      <tr v-for="(payment,index) in paymentsList" :key="index">
        <td>{{ startIndex + index + 1 }}</td>
        <td>{{ payment.date }}</td>
        <td>{{ payment.category }}</td>
        <td class="value">
          {{ payment.value }}
          <div class="menu" @click="showContextMenu($event, startIndex + index)">
            &bull;&bull;&bull;
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props: {
    paymentsList: {
      type: Array,
      default: () => ([])
    },
    startIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    showContextMenu (event, index) {
      const left = event.target.getBoundingClientRect().x
      const top = event.target.getBoundingClientRect().y
      this.$contextMenu.show({ top, left, index })
    }
  }
}
</script>

<style lang="scss" scoped>
  tr {
    text-align: left;
  }
  th,td {
    padding: 10px 20px;
  }
  .menu {
    display: inline-block;
    transform: rotate(90deg);
    font-size: 11px;
    &:hover {
      cursor: pointer;
    }
  }
  .value {
    text-align: right;
  }
</style>
