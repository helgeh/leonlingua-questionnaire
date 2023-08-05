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
    :root {
        --bs-link-color: #319E00;
        --bs-link-color-rgb: 49,101,69;
        --bs-link-decoration: underline;
        --bs-link-hover-color: #30b700;
        --bs-link-hover-color-rgb: 48,104,74;
    }
    #app {
        font-family: "Mulish", Mulish, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
    .btn-primary {
        --bs-btn-color: #fff;
        --bs-btn-bg: #319E00;
        --bs-btn-border-color: #319E00;
        --bs-btn-hover-color: #fff;
        --bs-btn-hover-bg: #30b700;
        --bs-btn-hover-border-color: #207203;
        --bs-btn-focus-shadow-rgb: 49,132,253;
        --bs-btn-active-color: #fff;
        --bs-btn-active-bg: #207203;
        --bs-btn-active-border-color: #238500;
        --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        --bs-btn-disabled-color: #fff;
        --bs-btn-disabled-bg: #319E00;
        --bs-btn-disabled-border-color: #319E00;
    }

</style>
