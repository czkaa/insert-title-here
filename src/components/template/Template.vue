<template>
    <div class="fixed w-full h-full flex flex-col items-center  overflow-x-hidden pb-24 xs:px-3" :class="[view === 'Home' ? 'overflow-y-auto' : 'overflow-y-hidden']">


        <TemplateHeader class="z-50 sticky top-3 xs:top-6 xs:transform xs:-translate-y-2"/>
        
        <TemplateGrid class="fixed top-0 left-0"/>

        <TemplateNav class="z-50 sticky top-40 xs:top-26 transform -translate-y-8 xs:-translate-y-12"/>

        <TemplateBody class="mt-0 xs:mt-8"/>

        <TemplateFooter class="fixed bottom-1.5 sm:-bottom-4"/>


       
        <div class="fixed top-1/3 left-20 border-secondary border-l pb-10 -ml-0.25 filter-outline">
            <div class="w-1 h-6 bg-secondary rounded-full -ml-0.5 transform rotate-12 mt-4"/>
            <div class="w-0.25 h-20 bg-secondary rounded-full -mt-2 "/>
        </div>

        <SnippetDraggable class="fixed left-8 top-14 xs:top-60 p-1 filter-outline">
            <div class="w-56 h-5 rounded-full transform" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem'}"/>
            <div class="w-28 h-5 rounded-full transform -rotate-45 -mt-5" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem'}"/>
            <div class="w-20 h-20 relative rounded-full border-secondary border transform translate-4  wireframe-visible">
                <div class="w-full h-1/2 border-b-2 border-secondary"/>
                <div class="w-1/2 h-full border-r-2 border-secondary absolute top-0 left-0"/>
            </div>
        </SnippetDraggable>

        <SnippetDraggable class="absolute bottom-6 right-20 xs:bottom-10 xs:right-10 filter-outline">
            <div class="flex -space-x-24 ">
                <div v-for="i in 3" class="w-60 h-56 rounded-full transform scale-x-50 rotate-45 flex-shrink-0" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '8rem'}"/>
            
                <div class="w-20 h-20 relative rounded-full border-secondary border transform translate-x-5 flex-shrink-0">
                    <div class="w-full h-1/2 border-b-2 border-secondary"/>
                    <div class="w-1/2 h-full border-r-2 border-secondary absolute top-0 left-0"/>
                </div>
            </div> 
        </SnippetDraggable>

        <div class="absolute left-7 top-24 xs:top-4 xs:left-4 mt-2.5 transform rotate-45 filter-outline p-1">
            <div class="w-5 h-6 rounded-full" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem'}"></div>
        </div>
        
        <h2 :style="{filter: 'drop-shadow(0px 0px 1px var(--color-secondary)) drop-shadow(0px 0px 1px var(--color-secondary))'}"
            class="fixed top-0 text-secondary z-50 text-sm uppercase w-full text-center ">
            Local Services Wireframe 3
        </h2>
    </div>
</template>

<script setup>

  import { useStore } from 'vuex';
  import { computed } from 'vue'

  const store = useStore();

  const view = computed(() => { return store.state.view});

  import { ref, onMounted} from 'vue'

  const trigger = ref(false);
  onMounted(() => {
    setTimeout(() => {
        trigger.value = true
    }, 1000)
  })



</script>