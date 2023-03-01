<template>
    <button basic-nav-button class="relative group" style="filter: url(/#outline)">
        <div class="wireframe-text whitespace-nowrap uppercase group-hover:tracking-widest transition-all duration-500" style="filter: url(/#blur)">{{text}}</div>
        <div class="whitespace-nowrap uppercase w-full z-50 absolute top-0 group-hover:tracking-widest transition-all duration-500 text-white" style="filter: url(/#outline)">{{props.text}}</div>
    </button>
</template>

<script setup>
const props = defineProps({
    text: String,
    realText: String
})
</script>