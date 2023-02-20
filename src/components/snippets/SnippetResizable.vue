<template>
    <div snippet-resizable resize class="resize overflow-hidden relative p-3 filter-outline">
        <slot/>
        
        <BasicResizable  class="pointer-events-none absolute top-0 left-0 w-full h-full wireframe-visible"/>
    </div>
</template>
  
<script setup>
import BasicResizable from '../basic/BasicResizable.vue';

</script>

<style lang="scss" scoped>
::-webkit-resizer {
  background-color: transparent;
  // outline: 0.05rem solid var(--color-secondary);
  outline-offset: -0.05rem;
}
</style>
  

  