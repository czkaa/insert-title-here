<template>
  <div>
    <Template
      :class="[
        'fixed w-full h-full top-0 left-0',
        route.name !== 'Home' ? 'pointer-events-none' : 'pointer-events-auto'
      ]"/>

        <router-view  v-slot="{ Component }">
          <transition name="slide">
            <component :is="Component" :key="route.path" :content="content" class=""/>
          </transition>
        </router-view>

      <LayoutNav class="fixed top-0 right-0"/>

     <UtilityFilters/>
  </div>
</template>

<script setup>
  import axios from "axios";
  import { useRoute } from 'vue-router'
  import { ref, computed, watch, onMounted } from 'vue'
  import { useStore } from 'vuex';
  
  const store = useStore();
  const route = useRoute();
  const isWireframe = computed(() => { return store.state.isWireframe});
  const isLoading = ref(true);
  const content = ref(null)

  watch(() =>isWireframe.value, (val) => {
    // if(!val) {
    //   document.body.classList.add('themed-filled')
    // } else {
    //   document.body.classList.remove('themed-filled')
    // }
  })

  async function fetchContent() {
    axios
      .get("/content.json")
      .then((res) => {
        content.value = res.data
        isLoading.value = false;
      })
      .catch((err) => console.log(err));
  }

  onMounted(() => {
    console.log('MOUNTING')
    fetchContent();
  })

</script>

<style lang="scss">

  .filter-outline {
    filter: url(https://http://czkaa.github.io/insert-title-here/#outline);
  }

  .filter-outline-xs {
    filter: url(https://http://czkaa.github.io/insert-title-here/#outline-xs);
  }

  .filter-blur {
    filter: url(https://http://czkaa.github.io/insert-title-here/#blur);
    &:hover {
      filter: url(https://http://czkaa.github.io/insert-title-here/#blur-hover);
    }
  }

  .filter-blur2 {
    filter: url(https://http://czkaa.github.io/insert-title-here/#blur2);
  }

  .wireframe-border {
    @apply  border border-secondary;
  }
  
  .wireframe-text {
    @apply text-white;
    -webkit-text-stroke: 0.9rem white;
  }

  .wireframe-text-hover {
    @apply text-white;
    -webkit-text-stroke: 0.9rem var(--color-tertiary);
  }

   .wireframe-text-sm {
    @apply text-white;
    filter: url(https://http://czkaa.github.io/insert-title-here/#outline);
  }


    
//  .wireframe-text-sm {
//     @apply text-white;
//     -webkit-text-stroke: 0.9rem white;
//   }

  .wireframe-visible {
    @apply opacity-100;
  } 
  
  .wireframe-background {
    @apply bg-transparent;
  }
 

  .slide-enter-active,
  .slide-leave-active {
    transition: all 500ms ease-out;
    position: fixed;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100vw);
  }

</style>
