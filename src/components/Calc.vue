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
        :disabled="op1==='' || op2===''"
      >
        {{operation}}
      </button>
    </div>
    <br>
    <input type="checkbox" id="checkbox" v-model="showKeyboard">
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <br>
    <div v-show="showKeyboard" class="keyboard">
      <button
        @click="minus"
      >
        -
      </button>
      <button
        v-for="n in 10"
        :key="n"
        @click="inputOperand(n-1)"
      >
        {{ n-1 }}
      </button>
      <button
        @click="backspase"
      >
        &larr;
      </button>
      <br>
      <input type="radio" id="op1" value="op1" v-model="selectedOperand">
      <label for="op1">Операнд 1</label>
      <input type="radio" id="op2" value="op2" v-model="selectedOperand">
      <label for="op2">Операнд 2</label>
    </div>
    <br>
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
    },
    inputOperand (value) {
      console.log(value)
      this[this.selectedOperand] = Number('' + this[this.selectedOperand] + value)
    },
    backspase () {
      this[this.selectedOperand] = Math.trunc(this[this.selectedOperand] / 10)
    },
    minus () {
      this[this.selectedOperand] = this[this.selectedOperand] * -1
    }
  }
}
</script>

<style module>
  button {
    margin: 2px;
  }
</style>
