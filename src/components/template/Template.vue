<template>
    <div class="fixed w-full h-full flex flex-col items-center overflow-y-auto overflow-x-hidden pb-24 sm:px-3">


        <TemplateHeader class="z-50 sticky top-3 sm:top-6 sm:transform sm:-translate-y-2"/>
        
        <TemplateGrid class="fixed top-0 left-0"/>

        <TemplateNav class="z-50 sticky top-40 sm:top-26 transform -translate-y-8 sm:-translate-y-12"/>

        <TemplateBody class="mt-0 sm:mt-8"/>

        <TemplateFooter class="fixed bottom-1"/>


       
        <div class="fixed top-1/3 left-20 border-secondary border-l pb-10 -ml-0.25" style="filter: url(/#outline)">
            <div class="w-1 h-6 bg-secondary rounded-full -ml-0.5 transform rotate-12 mt-4"/>
            <div class="w-0.25 h-20 bg-secondary rounded-full -mt-2 "/>
        </div>

        <SnippetDraggable class="fixed left-8 top-14 sm:top-60" style="filter: url(/#outline)">
            <div class="w-56 h-5 rounded-full transform" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem'}"/>
            <div class="w-28 h-5 rounded-full transform -rotate-45 -mt-5" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem'}"/>
            <div class="w-20 h-20 relative rounded-full border-secondary border transform translate-4  wireframe-visible">
                <div class="w-full h-1/2 border-b-2 border-secondary"/>
                <div class="w-1/2 h-full border-r-2 border-secondary absolute top-0 left-0"/>
            </div>
        </SnippetDraggable>

        <SnippetDraggable class="absolute bottom-6 right-20 sm:bottom-10 sm:right-10">
            <div class="flex -space-x-24" style="filter: url(/#outline)">
                <div v-for="i in 3" class="w-60 h-56 rounded-full transform scale-x-50 rotate-45 flex-shrink-0" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '8rem'}"/>
            
                <div class="w-20 h-20 relative rounded-full border-secondary border transform translate-x-5 flex-shrink-0">
                    <div class="w-full h-1/2 border-b-2 border-secondary"/>
                    <div class="w-1/2 h-full border-r-2 border-secondary absolute top-0 left-0"/>
                </div>
            </div> 
        </SnippetDraggable>

        <div class="w-5 h-6 rounded-full absolute left-7 top-24 sm:top-4 sm:left-4 mt-0.5 transform rotate-45" :style="{backgroundImage: `url('raster.png')`, backgroundSize: '5rem', filter: 'url(#outline)'}" />

        
        <h2 :style="{filter: 'drop-shadow(0px 0px 1px var(--color-secondary)) drop-shadow(0px 0px 1px var(--color-secondary))'}"
            class="fixed top-0 text-secondary z-50 text-sm uppercase w-full text-center ">
            Local Services Wireframe 3
        </h2>
    </div>
</template>