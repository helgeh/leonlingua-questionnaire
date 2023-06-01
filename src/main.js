import { createApp, ref } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import {Carousel} from "bootstrap"


import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
// library.add(faUserSecret)
library.add(faTimes)

/* add font awesome icon component */
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false




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
          const errorCount = toCheck.filter(obj => !obj.result).length;
          const done = errorCount === 0;
          return {done, level, count: toCheck.length, errorCount};
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
