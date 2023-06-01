<template>
            
    <h2>Sp&oslash;rreskjema <span class="badge text-bg-light">v0.3</span></h2>

    <div id="questionnaire">
        <div id="questionnaire-carousel" class="carousel slide" data-bs-touch="false">
            <div class="carousel-inner">

                <slot />


            </div>
        </div>
    </div>

</template>


<script>

    export default {
        name: 'LlQuestionnaire',
        components: []
        // props: {
        //   msg: String
        // }
    }
</script>
