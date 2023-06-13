<template>

    <!-- <a href="#/">Home</a> |
    <a href="#/questionnaire">Questionnaire</a> |
    <a href="#/non-existent-path">Broken Link</a> -->
    
    <component :is="currentView" />

</template>

<script setup>

    import { ref, computed } from 'vue'
    import LlHome from './pages/LlHome.vue'
    import LlSignUp from './pages/LlSignUp.vue'
    import LlAbout from './pages/LlAbout.vue'
    import LlNotFound from './pages/LlNotFound.vue'

    const routes = {
        '/': LlHome,
        '/questionnaire': LlSignUp,
        '/about': LlAbout
    }

    const currentPath = ref(window.location.hash)

    const currentView = computed(() => {
        return routes[currentPath.value.slice(1) || '/'] || LlNotFound
    })

    window.addEventListener('hashchange', () => {
        currentPath.value = window.location.hash
    })

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
