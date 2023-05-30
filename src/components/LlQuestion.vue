<template>
    
        <li class="list-group-item">

            <p>
                <LlQuestionPart v-for="part in parts" :key='part.id' :text="part.text" :alt="part.alt" @answered="onAnswered" @reset="onReset"></LlQuestionPart> 
                <span class="badge rounded-pill text-bg-success" v-if="correct"><i class="bi bi-check-lg"></i></span>
            </p>

            <div v-if="fail && !correct" class="alert alert-dark" role="alert">
                <slot />
            </div>

        </li>

</template>

<script>


function tupleBefore(haystack, needle) {
  const pos = haystack.indexOf(needle);
  return [haystack.substr(0, pos), haystack.substr(pos)];
}

function trim(str) {
  return str.trim();
}

function buildAlts(alternatives) {
  // console.log('building alts...');
  var result = [];
    var alts = alternatives.split(';');
    for (var k = 0; k < alts.length; k++) {
        var obj = {answers: [], facit: ''};
        obj.facit = trim(tupleBefore(alts[k], '**')[1].substr(2).split('*')[0]);
        var answers = alts[k].split(/\*+/g);
        for (var l = 0; l < answers.length; l++) {
      var a = trim(answers[l]);
            if (a.length > 0)
                obj.answers.push(a);
        }
        result.push(obj);
    }
  return result;
}

function buildParts(question, answers) {
  var alts = buildAlts(answers);
  var parts = [];
  var qparts = question.split('_');
  for (var i = 0; i < qparts.length; i++) {
    var obj = {id: Date.now()};
    obj.text = qparts[i];
    if (alts[i])
      obj.alt = alts[i];
    parts.push(obj);
  }
  return parts;
}
    
import LlQuestionPart from './LlQuestionPart.vue'
import _ from 'lodash'
    
  export default {
    components: {LlQuestionPart},
    inject: ['resultPlugin'],
    props: ['q', 'a', 'level'],
    data(data) {
      return {
        parts: buildParts(data.q, data.a),
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
        return _.every(alts, alt => alt.correct);
      },
      isFail() {
        var alts = this.parts.filter(p => !!p.alt).map(p => p.alt);
        return _.some(alts, alt => alt.fail) && _.every(alts, alt => alt.fail !== undefined);
      }
    },
    created() {
      this.resultPlugin.register(this.q, this.reveal);
    },
    mounted() {
    }
  }

</script>