<template>
    <header layout-header class="bg-quaternary border border-secondary wireframe-background rounded-full hover:bg-tertiary w-11/12 hover:w-full cursor-pointer transition-all duration-1000 flex flex-col justify-center items-center overflow-hidden flex-shrink-0">
      <h1 class="text-xl font-sans p-2 ">
        <div class="border border-dashed border-white">
          <BasicInput style="filter: url(#outline)" 
            placeholder="Insert Title Here" 
            text="Dysfunctional Templates" 
            classNames="h-28 sm:h-20 -mt-1 whitespace-nowrap text-white tracking-tight w-full overflow-hidden leading-none outline-none bg-transparent text-center placeholder-white" />
        </div>
      </h1>
    </header>

    
</template>

<script setup>

  import { ref } from 'vue'

  const inputText = ref('Insert Title Here')

</script>