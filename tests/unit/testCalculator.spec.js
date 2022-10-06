import { mount } from '@vue/test-utils'
import Calc from '../../src/pages/Calc'

describe('Calculator testing', () => {
  test('Test first operator', () => {
    const wrapper = mount(Calc)
    const op1Inpun = wrapper.find('input[name=op1]')

    // op1Inpun.element.value = 1
    // op1Inpun.trigger('input')

    op1Inpun.setValue(1)

    expect(wrapper.vm.op1).toBe(1)
  })

  test('Test second operator', () => {
    const wrapper = mount(Calc)
    const op2Inpun = wrapper.find('input[name=op2]')

    op2Inpun.setValue(2)

    expect(wrapper.vm.op2).toBe(2)
  })

  test('Test sum', () => {
    const wrapper = mount(Calc)
    const op1Inpun = wrapper.find('input[name=op1]')
    const op2Inpun = wrapper.find('input[name=op2]')
    const sumButton = wrapper.find('button[name="+"]')

    op1Inpun.setValue(1)
    op2Inpun.setValue(2)
    sumButton.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  test('Test div', () => {
    const wrapper = mount(Calc)
    const op1Inpun = wrapper.find('input[name=op1]')
    const op2Inpun = wrapper.find('input[name=op2]')
    const divButton = wrapper.find('button[name="/"]')

    op1Inpun.setValue(4)
    op2Inpun.setValue(2)
    divButton.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })

  test('Test div ', () => {
    const wrapper = mount(Calc)
    const op1Inpun = wrapper.find('input[name=op1]')
    const op2Inpun = wrapper.find('input[name=op2]')
    const divButton = wrapper.find('button[name="/"]')

    op1Inpun.setValue(4)
    op2Inpun.setValue(2)
    divButton.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })

  test('Test division by 0 ', () => {
    const wrapper = mount(Calc)
    const op1Inpun = wrapper.find('input[name=op1]')
    const op2Inpun = wrapper.find('input[name=op2]')
    const divButton = wrapper.find('button[name="/"]')

    op1Inpun.setValue(4)
    op2Inpun.setValue(0)
    divButton.trigger('click')

    expect(wrapper.vm.error).toBe('На ноль делить нельзя')
  })

  test('Test sub', () => {
    const wrapper = mount(Calc)
    const op1Inpun = wrapper.find('input[name=op1]')
    const op2Inpun = wrapper.find('input[name=op2]')
    const subButton = wrapper.find('button[name="-"]')

    op1Inpun.setValue(5)
    op2Inpun.setValue(2)
    subButton.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  test('Test mult ', () => {
    const wrapper = mount(Calc)
    const op1Inpun = wrapper.find('input[name=op1]')
    const op2Inpun = wrapper.find('input[name=op2]')
    const multButton = wrapper.find('button[name="*"]')

    op1Inpun.setValue(5)
    op2Inpun.setValue(2)
    multButton.trigger('click')

    expect(wrapper.vm.result).toBe(10)
  })

  test('Test pow ', () => {
    const wrapper = mount(Calc)
    const op1Inpun = wrapper.find('input[name=op1]')
    const op2Inpun = wrapper.find('input[name=op2]')
    const powButton = wrapper.find('button[name="^"]')

    op1Inpun.setValue(4)
    op2Inpun.setValue(2)
    powButton.trigger('click')

    expect(wrapper.vm.result).toBe(16)
  })

  test('Test intdiv ', () => {
    const wrapper = mount(Calc)
    const op1Inpun = wrapper.find('input[name=op1]')
    const op2Inpun = wrapper.find('input[name=op2]')
    const intdivButton = wrapper.find('button[name="//"]')

    op1Inpun.setValue(5)
    op2Inpun.setValue(2)
    intdivButton.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })

  test('Test radio button ', () => {
    const wrapper = mount(Calc)
    const op2RadioButton = wrapper.find('#op2')

    op2RadioButton.setChecked()

    expect(wrapper.vm.selectedOperand).toBe('op2')
  })

  test('Test screen keyboard', () => {
    const wrapper = mount(Calc)
    const op1Inpun = wrapper.find('input[name=op1]')
    const button0 = wrapper.find('button[name="0"]')

    op1Inpun.setValue(5)
    button0.trigger('click')

    expect(wrapper.vm.op1).toBe(50)
  })

  test('Test backspase key', () => {
    const wrapper = mount(Calc)
    const op1Inpun = wrapper.find('input[name=op1]')
    const backspaseButton = wrapper.find('button[name=backspase]')

    op1Inpun.setValue(59)
    backspaseButton.trigger('click')

    expect(wrapper.vm.op1).toBe(5)
  })
})
