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

<script>

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import LlQuestionPart from './LlQuestionPart.vue'
    import {every, some} from 'lodash'
        
    export default {
        components: {LlQuestionPart, FontAwesomeIcon},
        inject: ['resultPlugin', 'utils'],
        props: ['q', 'a', 'level'],
        data(data) {
            return {
                parts: this.utils.buildParts(data.q, data.a),
                correct: false,
                fail: false
            }
        },
        methods: {
            onAnswered(/*answer*/) {
                this.resultPlugin.update(this.q, this.isCorrect());
            },
            onReset() {
                // this.correct = false;
                // this.fail = false;
            },
            reveal() {
                this.correct = this.isCorrect();
                this.fail = this.isFail();
            },
            isCorrect() {
                var alts = this.parts.filter(p => !!p.alt).map(p => p.alt);
                return every(alts, alt => alt.correct);
            },
            isFail() {
                var alts = this.parts.filter(p => !!p.alt).map(p => p.alt);
                return some(alts, alt => alt.fail) && every(alts, alt => alt.fail !== undefined);
            }
        },
        created() {
            this.resultPlugin.register(this.q, this.reveal);
        },
        mounted() {
        }
    }

</script>