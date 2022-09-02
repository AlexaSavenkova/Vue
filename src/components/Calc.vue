<template>
  <div>
    <div class="error" v-if="error">{{ error }}</div>
    <div class="main">
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      = {{ result }}
    </div>
    <br>
    <div class="keyboard">
      <button
        v-for="operation of operations"
        @click="calculate(operation)"
        :key="operation"
      >
        {{operation}}
      </button>
<!--      <button @click="calculate('+')" title="Сумма">+</button>-->
<!--      <button @click="calculate('-')" title="Вычитание">-</button>-->
<!--      <button @click="calculate('*')" title="Умножение">*</button>-->
<!--      <button @click="calculate('/')" title="Деление">/</button>-->
<!--      <button @click="calculate('^')" title="Степень">^</button>-->
<!--      <button @click="calculate('//')" title="Целочисленное деление">//</button>-->
    </div>
    <div class="logs">
      {{ logs }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0,
    error: '',
    operations: ['+', '-', '/', '*', '^', '//'],
    logs: {},
    showKeyboard: false,
    selectedOperand: 'op1'
  }),
  methods: {
    calculate (operation) {
      this.error = ''
      switch (operation) {
        case '+': this.sum(); break
        case '-': this.sub(); break
        case '/': this.div(); break
        case '*': this.mult(); break
        case '^': this.pow(); break
        case '//':this.intdiv(); break
      }
      const { op1, op2, result } = this
      // this.logs = { ...this.logs, [Date.now()]: `${op1} ${operation} ${op2} = ${result}` }
      this.$set(this.logs, Date.now(), `${op1} ${operation} ${op2} = ${result}`)
    },
    sum () {
      const { op1, op2 } = this
      this.result = op1 + op2
    },
    div () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя'
        return
      }
      this.result = op1 / op2
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
    },
    mult () {
      const { op1, op2 } = this
      this.result = op1 * op2
    },
    pow () {
      const { op1, op2 } = this
      this.result = op1 ** op2
    },
    intdiv () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя'
        return
      }
      this.result = Math.trunc(op1 / op2)
    }
  }
}
</script>

<style module>

</style>
