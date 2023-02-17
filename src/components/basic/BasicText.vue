<template>
  <div
    basic-text
    lang="en"
    :class="[
       'font-sans',
    {
      'text-lg': size ===  'lg',
      'text-md': size ===  'md',
      'text-sm': size === undefined || size === 'sm',
      'text-xs': size === 'xs',
    }]"
    v-html="text"/>
</template>

<script>

export default {
  components: {
  },
  props: {
    text: String,
    size: String,
  },
}
</script>

<style lang="scss" scoped>

  .text-sm:deep() {
  }

</style>
