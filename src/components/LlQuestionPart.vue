<template>
    
    <span v-html="insertBrs(text)"></span>

    <template v-if="alt">

    <select class="" @change="onChange" v-model="answer">
        <option value="-">Velg</option>
        <option v-for="answer in alt.answers" :key='answer.toString()' :value="answer">{{answer}}</option>
    </select>

    </template>

</template>

<script setup>

    import { defineProps, defineEmits, ref } from 'vue'

    const props = defineProps(['text', 'alt'])
    const emit = defineEmits(['answered', 'correct', 'fail', 'reset'])

    const answer = ref('-')

    function insertBrs(str) {
        return str.replace('\n', '<br />');
    }

    function onChange() {
        // eslint-disable-next-line
        props.alt.correct = answer.value == props.alt.facit;
        // eslint-disable-next-line
        props.alt.fail = !props.alt.correct && answer.value !== '-';
        emitEvents();
    }

    function emitEvents() {
        emit('answered', answer.value);
        if (props.alt.correct) {
          emit('correct');
        }
        if (props.alt.fail) {
            emit('fail');
        }
        if (answer.value === '-') {
            emit('reset');
        }
    }

</script>