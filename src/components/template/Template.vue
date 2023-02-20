<template>
    <div class="fixed w-full h-full flex flex-col items-center overflow-y-auto overflow-x-hidden pb-16">
           <!-- <div class="w-full h-8 bg-secondary flex items-center p-2 space-x-2">
          <div class="w-4 h-4 bg-white rounded-full"/>
          <div class="w-4 h-4 bg-white rounded-full"/>
          <div class="w-4 h-4 bg-white rounded-full"/>
        </div> -->

        <TemplateHeader class="z-50 sticky top-3"/>

        <TemplateNav class="z-50 sticky top-28"/>

        <!-- <div class="w-full h-full" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5%'}"> -->
        <TemplateBody class="mt-0"/>

        <TemplateFooter class="fixed bottom-2"/>

        <SnippetDraggable class="fixed left-8 top-12 filter-outline wireframe-visible">
            <div class="w-56 h-5 rounded-full transform" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem'}"/>
            <div class="w-28 h-5 rounded-full transform -rotate-45 -mt-5" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem'}"/>
            <div class="w-20 h-20 relative rounded-full border-secondary border transform translate-4  wireframe-visible">
                <div class="w-full h-1/2 border-b-2 border-secondary"/>
                <div class="w-1/2 h-full border-r-2 border-secondary absolute top-0 left-0"/>
            </div>
        </SnippetDraggable>

        <div class="w-5 h-6 rounded-full absolute left-7 top-24 mt-0.5 transform rotate-45 filter-outline wireframe-visible" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem'}" />

        <TemplateGrid class="fixed top-0 left-0"/>
        
        <h2 :style="{filter: 'drop-shadow(0px 0px 1px var(--color-secondary)) drop-shadow(0px 0px 1px var(--color-secondary))'}"
            class="fixed top-0 wireframe-visible text-secondary z-50 text-sm uppercase w-full text-center ">
            Local Services Wireframe 3
        </h2>
    </div>
</template>