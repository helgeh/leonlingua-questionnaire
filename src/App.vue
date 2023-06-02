<template>

    <!-- <a href="#/">Home</a> |
    <a href="#/questionnaire">Questionnaire</a> |
    <a href="#/non-existent-path">Broken Link</a> -->
    
    <component :is="currentView" />

    <!-- <LlQuestionnaire /> -->

</template>

<script>

    // import { ref, computed } from 'vue'
    import LlHome from './pages/LlHome.vue'
    import LlAbout from './pages/LlAbout.vue'
    // import Questionnaire from './pages/Questionnaire.vue'
    import LlNotFound from './pages/LlNotFound.vue'

    import LlQuestionnaire from './components/LlQuestionnaire.vue'


    /*


const routes = {
  '/': LlHome,
  '/about': About
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
          this.currentPath = window.location.hash
        })
  }
}


    */

    const routes = {
        '/': LlHome,
        '/questionnaire': LlQuestionnaire,
        '/about': LlAbout
    }

    export default {
        name: 'App',
        components: {
            LlHome,
            LlQuestionnaire,
            LlNotFound,
            LlAbout
        },
        data() {
            return {
                currentPath: window.location.hash
            }
        },
        computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || '/'] || LlNotFound
            }
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            })
        }
    }

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
