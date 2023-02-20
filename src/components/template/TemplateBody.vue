<template>
     <div class="w-full p-4 pb-6 bg-quaternary wireframe-background" :style="{maskImage: `url('background.svg')`, maskSize: 'cover'}">

        <SnippetResizable class="w-2/3 hover:bg-tertiary transition-all duration-1000 ml-20">
            <BasicInput  
            class="w-full text-md text-secondary w-full leading-1 outline-none bg-transparent bg-opacity-20 placeholder-secondary"
            placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            text="Neben einem niederschwefligen Einstieg in Grundlagen von HTML und CSS wird der Kurs sich um Konventionen im Web drehen: Templates und Website-Builder als schneller und kostengünstiger Weg, Webseiten zu generieren, schaffen Verfügbarkeit und Zugänglichkeit. Auf der anderen Seite bedienen sie Funktionalitäts- und Effizienzansprüche, rekurrieren auf bekannte Elemente und Interaktionen und manifestieren so Konventionen, anstatt sie zu hinterfragen – verstärkt noch durch neue KI-Bots, die in Sekunden ein Template anhand von Keywords generieren. Neben einer Teilnahme an Diskussionen sind die Teilnehmer:innen des Kurses eingeladen, sich mit wiederkehrenden Website-Elementen auseinanderzusetzen um ihre eigenen, dysfunktionalen Antagonistinnen zu entwickeln, die Fragen aufwerfen statt Entscheidungen abzunehmen." />

        </SnippetResizable>

        <div class="h-44 w-full -mt-32 mb-10 ml-60 flex justify-center">
            <SnippetDraggable>
            <div class="flex -space-x-14 filter-outline wireframe-visible">
                <div v-for="i in 3" class="w-60 h-56 rounded-full transform scale-x-50 rotate-45" :style="{backgroundkImage: `url('raster.png')`, backgroundSize: '8rem'}"/>
            
                <div class="w-20 h-20 relative rounded-full border-secondary border transform translate-4">
                <div class="w-full h-1/2 border-b-2 border-secondary"/>
                <div class="w-1/2 h-full border-r-2 border-secondary absolute top-0 left-0"/>
                </div>
            </div> 
            </SnippetDraggable>
        </div>

        <SnippetResizable class="w-1/3 hover:bg-tertiary transition-all duration-1000 -mt-16 ml-32 mr-auto">
            <BasicInput  
            class="w-full wireframe-text-sm w-full leading-1 outline-none bg-transparent bg-opacity-20  placeholder-secondary" 
            text="Test Hallo Hallo"
            placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />        </SnippetResizable>

        <div class="space-x-3 flex wireframe-border p-4 mt-10 mx-20 items-center">
        <SnippetResizable v-for="i in 3" class="w-full h-48" />
        </div>

        </div>
</template>