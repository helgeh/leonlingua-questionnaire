import { createApp, ref } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import {Carousel} from "bootstrap"

	const app = createApp(App);

  const globalCount = ref(0)
  function useCount() {
    return globalCount;
  }
  app.provide('globalCount', useCount);

  const resultPlugin = {
    install: (app/*, options*/) => {
      const results = [];
      const levels = [];
      app.provide('resultPlugin', {
        addLevel(str) {
          if (levels.indexOf(str) < 0)
            levels.push(str);
        },
        getLevels() {
          return levels;
        },
        getCurrentLevel() {
          return levels[globalCount.value];
        },
        getNextLevel() {
          return levels[globalCount.value + 1] || '';
        },
        register: function (id, callback) {
          var level = levels[levels.length - 1];
          results.push({id: id, result: false, callback, level});
        },
        update: function (id, state) {
          var obj = results.find(obj => obj.id === id);
          if (obj)
            obj.result = state;
        },
        check: function (level) {
          const toCheck = results.filter(obj => obj.level === level);
          toCheck.forEach(obj => obj.callback && obj.callback());
          const done = toCheck.filter(obj => !obj.result).length === 0;
          return {done, level, count: toCheck.length};
        },
        advance: function () {
          globalCount.value++;
          const carousel = new Carousel('#questionnaire-carousel');
          carousel.next();
        }
      });
    }
  };


app.use(resultPlugin, {}).mount('#app')
