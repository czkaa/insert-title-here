<template>
  <div page-home class="mx-2 pb-8 px-20">
    <div class="w-full p-4 pb-6" :style="{backgroundImage: `url('background.svg')`, backgroundSize: 'cover'}">

      <SnippetResizable class="w-2/3 h-80 hover:bg-tertiary transition-all duration-500 ml-20">
          <textarea spellcheck="false" style="resize:none;" wrap="hard" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' class="w-full text-md text-secondary text-sm w-full h-full leading-1 outline-none bg-transparent bg-opacity-20 placeholder-secondary" placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."/>
        </SnippetResizable>

        <div class="h-44 w-full -mt-32 mb-10 ml-60 flex justify-center">
          <SnippetDraggable>
            <div class="flex -space-x-14 filter-outline">
              <div v-for="i in 3" class="w-60 h-56 rounded-full transform scale-x-50 rotate-45" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '8rem'}"/>
            
              <div class="w-20 h-20 relative rounded-full border-secondary border transform translate-4">
                <div class="w-full h-1/2 border-b-2 border-secondary"/>
                <div class="w-1/2 h-full border-r-2 border-secondary absolute top-0 left-0"/>
              </div>
            </div> 
          </SnippetDraggable>
        </div>

        <SnippetResizable class="w-1/3 h-40 hover:bg-tertiary transition-all duration-500 -mt-16 ml-32 mr-auto">
          <textarea spellcheck="false" style="resize:none;" wrap="hard" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' class="w-full text-md text-secondary text-xs w-full h-full leading-1 outline-none bg-transparent bg-opacity-20  placeholder-secondary" placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."/>
        </SnippetResizable>

      <div class="space-x-3 flex border border-secondary p-4 mt-10 mx-20 items-center">
        <SnippetResizable v-for="i in 3" class="w-full h-48" />
      </div>
    
   </div>
  </div>
</template>

<script setup>

</script>


