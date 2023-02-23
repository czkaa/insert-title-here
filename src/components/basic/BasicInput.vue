<template>
  <section basic-input class="w-full h-full">
    <textarea v-if="props.resize" :class="classNames" class="transition-all duration-500 w-full h-full resize-none min-h-textarea sm:min-h-textarea-sm" spellcheck="false"  wrap="hard" :placeholder="props.placeholder" v-model="value" @input="handleInput"/>
    <input v-else :class="classNames" class="transition-all duration-500 w-full" spellcheck="false" wrap="hard" :placeholder="props.placeholder" v-model="value" @input="handleInput"/>
  </section> 
</template>

<script setup>
    import { ref, reactive, onMounted, onUnmounted, computed, watch } from 'vue'
    import { useStore } from 'vuex';
    const store = useStore();

   const props = defineProps({
    placeholder: String,
    text: String,
    classNames: String,
    resize: {
      type: Boolean,
      default: false
    }
  })

  const value = ref('')
  const counter = ref(0)
  var interval = null
  const intervalCount = ref(1)

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
    if (counter.value < 10) {
        value.value  = props.text.slice(0, counter.value)
    } else {
       interval = setInterval(writeText, 100);
    }
  }

</script>