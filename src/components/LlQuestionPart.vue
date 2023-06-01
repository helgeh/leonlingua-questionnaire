<template>
    
      <span v-html="insertBrs(text)"></span>
      <template v-if="alt">
        <select class="" @change="onChange" v-model="answer">
          <option value="-">Velg</option>
          <option v-for="answer in alt.answers" :key='answer.toString()' :value="answer">{{answer}}</option>
        </select>
      </template>

</template>

<script>

  export default {
    props: ['text', 'alt'],
    emits: ['answered', 'correct', 'fail', 'reset'],
    data() {
      return {
        answer: '-'
      }
    },
    methods: {
      insertBrs(str) {
        return str.replace('\n', '<br />');
      },
      onChange() {
        // eslint-disable-next-line
        this.alt.correct = this.answer == this.alt.facit;
        // eslint-disable-next-line
        this.alt.fail = !this.alt.correct && this.answer !== '-';
        this.$emit('answered', this.answer);
        if (this.alt.correct) {
          this.$emit('correct');
        }
        if (this.alt.fail) {
          this.$emit('fail');
        }
        if (this.answer === '-') {
          this.$emit('reset');
        }
      }
    },
    mounted() {

    }
  }

</script>