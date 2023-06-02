<template>
    
    <li class="list-group-item d-flex justify-content-between align-items-center">
        
        <div class="ms-2 me-auto">

            <LlQuestionPart 
                v-for="part in parts" 
                :key='part.id' 
                :text="part.text" 
                :alt="part.alt" 
                @answered="onAnswered" 
                @reset="onReset"
            ></LlQuestionPart> 
            
        </div>

        <span class="badge bg-warning rounded-pill" v-if="fail && !correct">
            <font-awesome-icon icon="fa-solid fa-times" />
        </span>

    </li>

</template>

<script setup>

    import { inject, ref, onBeforeMount, defineProps } from 'vue'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import LlQuestionPart from './LlQuestionPart.vue'
    import {every, some} from 'lodash'

    const resultPlugin = inject('resultPlugin')
    const utils = inject('utils')

    const props = defineProps(['q', 'a', 'level'])

    const parts = ref(utils.buildParts(props.q, props.a))
    const correct = ref(false)
    const fail = ref(false)

    function onAnswered() {
        resultPlugin.update(props.q, isCorrect());
    }

    function onReset() {
        // correct.value = false;
        // fail.value = false;
    }

    function reveal() {
        correct.value = isCorrect();
        fail.value = isFail();
    }

    function isCorrect() {
        var alts = parts.value.filter(p => !!p.alt).map(p => p.alt);
        return every(alts, alt => alt.correct);
    }

    function isFail() {
        var alts = parts.value.filter(p => !!p.alt).map(p => p.alt);
        return some(alts, alt => alt.fail) && every(alts, alt => alt.fail !== undefined);
    }

    onBeforeMount(() => {
        resultPlugin.register(props.q, reveal);
    })

</script>