<template>
    <button basic-nav-button class="relative group" style="filter: url('/#outline')">
        <div class="text-white uppercase group-hover:tracking-widest transition-all duration-500 filter-blur" style=" -webkit-text-stroke: 0.9rem white;">{{text}}</div>
        <div 
            class="uppercase w-full text-white z-50 absolute top-0 group-hover:tracking-widest transition-all duration-500 filter-outline">
            {{props.text}}</div>

    </button>
</template>

<script setup>
const props = defineProps({
    text: String,
    realText: String
})
</script>