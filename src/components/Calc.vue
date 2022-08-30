<template>
  <div>
    <div class="main">
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      = {{ result }}
    </div>
    <br>
    <div class="keyboard">
      <button @click="sum" title="Сумма">+</button>
      <button @click="sub" title="Вычитание">-</button>
      <button @click="mult" title="Умножение">*</button>
      <button @click="div" title="Деление">/</button>
      <button @click="pow" title="Степень">^</button>
      <button @click="intdiv" title="Целочисленное деление">//</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0
  }),
  methods: {
    sum () {
      this.result = this.op1 + this.op2
    },
    div () {
      this.result = this.op1 / this.op2
    },
    sub () {
      this.result = this.op1 - this.op2
    },
    mult () {
      this.result = this.op1 * this.op2
    },
    pow () {
      this.result = this.op1 ** this.op2
    },
    intdiv () {
      this.result = Math.trunc(this.op1 / this.op2)
    }
  }
}
</script>

<style module>

</style>
