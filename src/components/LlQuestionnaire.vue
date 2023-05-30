<template>
            <h1>Questionnaire <span class="badge bg-secondary">v0.1</span></h1>

            <div id="questionnaire">
                <div id="questionnaire-carousel" class="carousel slide" data-bs-touch="false">
                    <div class="carousel-inner">

                        <slot />


                    </div>
                </div>
            </div>

</template>


<script>

    import LlLevel from './LlLevel.vue'
    import LlQuestionPart from './LlQuestionPart.vue'
    import LlQuestion from './LlQuestion.vue'

    export default {
        name: 'LlQuestionnaire',
        components: [
            LlLevel,
            LlQuestionPart,
            LlQuestion
            ]
// props: {
//   msg: String
// }
    }
</script>
