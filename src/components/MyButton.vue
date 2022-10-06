<template>
  <div>
    <slot name="prepend"/>
    <slot/>
    <slot name="prepend"/>
  </div>
</template>

<script>
export default {
  name: 'MyButton'
}
</script>

<style scoped>

</style>
