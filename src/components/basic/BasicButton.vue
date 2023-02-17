<template>
    <button class="text-secondary text-md p-3 overflow-hidden rounded-full relative p-1">
      <div class="button filter blur-md w-full h-full absolute"/>
      <div class="button filter top-0 left-0  rounded-full w-full h-full absolute border border-secondary"/>
      <div class="w-full h-full px-5 py-3 z-50 rounded-full text-center">{{props.text}}</div>
    </button>
</template>

<script setup>
   const props = defineProps({
    text: String,
  })

</script>

<style lang="scss" scoped>
.button {
  box-shadow: 0 -10px 15px 5px rgba(132, 97, 85,0.8), inset 0 3px 4px -1px rgba(132, 97, 85,0.4), inset 0 0 5px 1px rgba(132, 97, 85, 0.2), inset -10px 20px 10px 0 rgba(132, 97, 85,0.8)
}

button div:nth-child(2) {
  box-shadow: inset -2px 2px 10px 2px rgba(132, 97, 85,0.8), inset 2px 2px 10px 2px rgba(132, 97, 85,0.8);
}

</style>