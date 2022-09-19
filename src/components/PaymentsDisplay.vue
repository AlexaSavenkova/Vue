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
        <td>{{ index + 1 }}</td>
        <td>{{ payment.date }}</td>
        <td>{{ payment.category }}</td>
        <td>{{ payment.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  // props: ['paymentsList']
  props: {
    paymentsList: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style module>
  tr {
    text-align: left;
  }
  th,td {
    padding: 10px 20px;
  }
</style>
