import { createApp, ref } from 'vue'
import { createI18n } from 'vue-i18n'

import "bootstrap/dist/css/bootstrap.min.css"
import {} from "@popperjs/core"
import {Carousel} from "bootstrap"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faArrowRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
// library.add(faUserSecret)
library.add(faTimes, faArrowRight, faCaretDown)

/* add font awesome icon component */
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false

import './style.css'
import App from './App.vue'
import { messages } from './locales'

const i18n = createI18n({
  locale: 'no',
  fallbackLocale: 'en',
  messages: messages
})


	const app = createApp(App)
  app.use(i18n)

  const globalCount = ref(0)
  function useCount() {
    return globalCount
  }
  app.provide('globalCount', useCount)



  const resultPlugin = {
    install: (app/*, options*/) => {
      const results = []
      const levels = []
      const callbacks = {
        touched: []
      }
      const getTouchedSummary = function(obj) {
        const objs = results.filter(o => o.level === obj.level)
        const touchedCount = objs.filter(o => o.touched).length
        return { level: obj.level, all: touchedCount >= objs.length }
      }
      const broadcast = function(event, summary) {
        callbacks[event].forEach(cb => {
          cb(summary)
        })
      }
      app.provide('resultPlugin', {
        addLevel(str) {
          if (levels.indexOf(str) < 0)
            levels.push(str)
        },
        getLevels() {
          return levels
        },
        getCurrentLevel() {
          return levels[globalCount.value]
        },
        getNextLevel() {
          return levels[globalCount.value + 1] || ''
        },
        register: function (id, callback) {
          var level = levels[levels.length - 1]
          results.push({id: id, result: false, callback, level})
        },
        update: function (id, state) {
          var obj = results.find(obj => obj.id === id)
          if (obj) {
            obj.touched = true
            obj.result = state
          }
          broadcast('touched', getTouchedSummary(obj))
        },
        check: function (level) {
          const toCheck = results.filter(obj => obj.level === level)
          toCheck.forEach(obj => obj.callback && obj.callback())
          const errorCount = toCheck.filter(obj => !obj.result).length
          const errorPercent = (errorCount * 100) / toCheck.length
          const touchedCount = toCheck.filter(obj => obj.touched).length
          return {level, count: toCheck.length, errorCount, errorPercent, touchedCount}
        },
        advance: function () {
          globalCount.value++
          const carousel = new Carousel('#questionnaire-carousel')
          carousel.next()
        },
        on: function (event, callback) {
          callbacks[event].push(callback)
        }
      });
    }
  }
  app.use(resultPlugin, {})



  app.provide('utils', {

    tupleBefore(haystack, needle) {
      const pos = haystack.indexOf(needle)
      return [haystack.substr(0, pos), haystack.substr(pos)]
    },

    trim(str) {
      return str.trim()
    },

    buildAlts(alternatives) {
      // console.log('building alts...')
      var result = []
        var alts = alternatives.split(';')
        for (var k = 0; k < alts.length; k++) {
            var obj = {answers: [], facit: ''}
            obj.facit = this.trim(this.tupleBefore(alts[k], '**')[1].substr(2).split('*')[0])
            var answers = alts[k].split(/\*+/g)
            for (var l = 0; l < answers.length; l++) {
          var a = this.trim(answers[l])
                if (a.length > 0)
                    obj.answers.push(a)
            }
            result.push(obj)
        }
      return result
    },

    buildParts(question, answers) {
      var alts = this.buildAlts(answers)
      var parts = []
      var qparts = question.split('_')
      for (var i = 0; i < qparts.length; i++) {
        var obj = {id: Date.now()}
        obj.text = qparts[i]
        if (alts[i])
          obj.alt = alts[i]
        parts.push(obj)
      }
      return parts
    }

  })



app.mount('#app')
