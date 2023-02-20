<template>
   <textarea ref="root" class="transition-all duration-500" basic-input spellcheck="false" :style="styleObject" wrap="hard" :placeholder="props.placeholder" v-model="value" @input="handleInput"/>
</template>

<script setup>
    import { ref, reactive, onMounted, onUnmounted, computed, watch } from 'vue'
    import { useStore } from 'vuex';
    const store = useStore();
    const root = ref(null);
    const root2 = ref(null);
    const styleObject = ref({resize: 'none'})

   const props = defineProps({
    placeholder: String,
    text: String,
  })

  const value = ref('')
  const counter = ref(0)
  var interval = null
  const intervalCount = ref(1)
  const isWireframe = computed(() => { return store.state.isWireframe});

  function writeText () {
    if (counter.value < props.text.length) {
        counter.value += intervalCount.value
        intervalCount.value ++;
        value.value  = props.text.slice(0, counter.value)
    } else {
        clearInterval(interval)
    }
  }

  function handleInput() {

    counter.value ++;

    console.log(counter.value, props.text.slice(0, counter.value))

    if (counter.value < 10) {
        value.value  = props.text.slice(0, counter.value)
        
    } else {
        if (isWireframe.value) {
            store.commit('toggleIsWireframe')
        }

       interval = setInterval(writeText, 100);
    }
  }

  onMounted(() => {
    console.log('ROOT', root.value.scrollHeight)
    styleObject.value.height = `${root.value.scrollHeight}px`

    resizeObserver.observe(root.value);
  })

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
        console.log('RESIZE')
        console.log(root.value.scrollHeight)
        styleObject.value.height = `${root.value.scrollHeight}px`
    }
   })
</script>