<template>
  <div class="locale-changer">
    <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <span :class="`flag-${$i18n.locale}`"></span>
    </button>
    <ul class="dropdown-menu">
      <li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`">
        <a href="javascript:void 0" @click="$i18n.locale = locale" class="dropdown-item" :class="[flagClass(locale), activeClass(locale)]">
          {{ locales[locale] }}
        </a>
      </li>
    </ul>

    <!-- <span>{{ $t('general.locale') }}</span>: 
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" :class="`flag-${locale}`">
        {{ locales[locale] }}
      </option>
    </select> -->
  </div>
</template>

<script setup>

  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const i18n = useI18n()

  const locales = {
    no: 'Norsk',
    en: 'English'
  }

  const currentLocale = computed(() => locales[i18n.locale.value])

  function flagClass(loc) {
    return `flag-${loc}` // : true, 'active': (locale === $i18n.locale)}
  }

  function activeClass(loc) {
    return loc === i18n.locale.value ? 'active' : ''
  }
  
</script>

<style scoped>
  [class^="flag-"] {
    vertical-align: middle;
    &:after {
      padding-left: 5px;
    }
  }
  .flag-no:after {
    content: "🇳🇴";
  }
  .flag-en:after {
    content: "🇬🇧";
  }
</style>