<template>

    <component :is="currentView" />

    <LlLocaleChanger />

</template>

<script setup>

    import { ref, computed, watch } from 'vue'
    import { useI18n } from 'vue-i18n'

    import LlHome from './pages/LlHome.vue'
    import LlSignUp from './pages/LlSignUp.vue'
    import LlAbout from './pages/LlAbout.vue'
    import LlNotFound from './pages/LlNotFound.vue'

    import LlLocaleChanger from './components/LlLocaleChanger.vue'


    const { locale } = useI18n()

    watch(locale, (newVal, oldVal) => {
      localStorage.setItem('locale', newVal)
    })

    const storedLocale = localStorage.getItem('locale')
    if (storedLocale) {
      locale.value = storedLocale
    }

    const routes = {
        '/': LlHome,
        '/questions': LlSignUp,
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
        --bs-link-hover-color-rgb: 49,101,69;
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
        --bs-btn-hover-border-color: #2b9d02;
        --bs-btn-focus-shadow-rgb: 49,101,69;
        --bs-btn-active-color: #fff;
        --bs-btn-active-bg: #2b9d02;
        --bs-btn-active-border-color: #238500;
        --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        --bs-btn-disabled-color: #fff;
        --bs-btn-disabled-bg: #319E00;
        --bs-btn-disabled-border-color: #319E00;
    }
    .locale-changer {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;
    }

</style>
