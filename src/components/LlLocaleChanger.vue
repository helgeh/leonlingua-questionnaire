<template>
  <div class="locale-changer">
    <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <span :class="`flag-${$i18n.locale}`"></span>
    </button>
    <ul class="dropdown-menu">
      <li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`">
        <a href="javascript:void 0" @click="$i18n.locale = locale" class="dropdown-item flagged" :class="[flagClass(locale), activeClass(locale)]">
          {{ locales[locale] }}
        </a>
      </li>
    </ul>
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
  @font-face {
    font-family: NotoColorEmojiLimited;
    unicode-range: U+1F1E6-1F1FF;
    src: url(/src/assets/NotoColorEmoji.ttf);
  }
  .flagged {
    font-family: 'NotoColorEmojiLimited', -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 
    'Segoe UI Emoji', 'Segoe UI Symbol';
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