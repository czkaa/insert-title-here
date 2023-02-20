<template>
    <header layout-header class="bg-white border border-secondary wireframe-background rounded-full hover:bg-tertiary w-11/12 h-30 hover:w-full cursor-pointer transition-all duration-1000 flex flex-col justify-center items-center overflow-hidden flex-shrink-0">
      <h1 class="text-xl font-sans p-2 my-2 ">
        <div class="border border-dashed border-white ">
          <BasicInput style="letter-spacing: -0.05em;" placeholder="Insert Title Here" text="Dysfunctional Templates" class="whitespace-nowrap wireframe-text-sm text-white block w-full mt-24 overflow-hidden leading-none outline-none bg-transparent text-center placeholder-white" />
        </div>
      </h1>
    </header>

    
</template>

<script setup>

  import { ref } from 'vue'

  const inputText = ref('Insert Title Here')

</script>