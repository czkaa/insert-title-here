<template>
    <header layout-header class="mt-2 bg-quaternary border border-secondary rounded-full hover:bg-tertiary w-10/12 h-32 hover:w-full inline-block cursor-pointer transition-all duration-500">

      
      <h2 :style="{filter: 'drop-shadow(0px 0px 1px var(--color-secondary)) drop-shadow(0px 0px 1px var(--color-secondary))'}"
            class="text-secondary absolute top-0 left-0 z-50 text-sm  uppercase w-full text-center">
            Local Services Wireframe 3
        </h2>

      <h1 class="w-full text-xl font-sans px-28">
          <input spellcheck="false" v-model="inputText" class="text-white filter-outline block w-full mt-1 h-32 border border-dashed border-white overflow-hidden leading-none outline-none bg-transparent placeholder-secondary text-center" />
      </h1>
    </header>

    
</template>

<script setup>

  import { ref } from 'vue'

  const inputText = ref('Insert Title Here')

</script>