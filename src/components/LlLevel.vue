<template>
    
    <div :class="{ 'carousel-item': true, active: isActive }">

        <div class="card">
    
            <h3 class="card-header">
                {{ title }}
            </h3>
            
            <ul class="list-group list-group-flush">
                <slot />
            </ul>

            <div class="card-footer">
                <div class="d-flex justify-content-between">
                    <a v-if="hasNext" @click="checkResults" tabindex="0" role="button" ref="popover" class="btn btn-primary popover-trigger my-3 text-uppercase" data-bs-trigger="focus" data-bs-placement="bottom" :data-bs-title="popoverTitle" :data-bs-content="popoverBody">
                        {{ $t('app.checkanswers.label')}}
                    </a>
                    <button v-if="!preventNext" @click="resultPlugin.advance()" class="btn btn-light">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </button>
                </div>
            </div>

        </div>

        <LlModal :on-dismiss="onModalHide" :disabled="preventNext" ref="modal">

            <template v-slot:title>{{ $t('results.header')}} {{currentLevel}}</template>

            <template v-slot:body>

                <div class="alert" :class="{ 'alert-success': levelClear, 'alert-info': !levelClear }" role="alert">
                    <h4 class="alert-heading">{{ $t('results.congrats') }}</h4>
                    <p>
                        {{ $t('results.score.pre') }} <strong>{{ resultCount }}</strong> {{ $t('general.of') }} <strong>{{ totalCount }}</strong> {{ $t('results.score.post') }}!
                    </p>
                    <hr />
                    <p v-if="!levelClear" class="mb-0">
                        {{ $t('results.responses.enough') }}
                    </p>
                    <p v-if="levelClear && !preventNext" class="mb-0">
                        {{ $t('results.responses.advance') }}
                    </p>
                    <p v-if="levelClear && preventNext" class="mb-0">
                        {{ $t('results.responses.end') }} <a href="https://leonlingua.no/qu_end">{{ $t('general.here') }}</a>.
                    </p>
                </div>

                <p v-if="levelClear && !preventNext">
                    <a class="btn btn-secondary" data-bs-toggle="collapse" href="#collapseSimplero" role="button" aria-expanded="false" aria-controls="collapseSimplero">
                        {{ $t('general.register') }} <font-awesome-icon icon="fa-solid fa-caret-down" />
                    </a>
                </p>
                <div :class="{'show': !levelClear || preventNext}" class="collapse" id="collapseSimplero">
                    <div ref="simpleroContainer">
                    </div>
                </div>

            </template>

        </LlModal>

  
    </div>


</template>

<script setup>

    import { defineProps, ref, watch, inject, onBeforeMount, onMounted } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { Popover } from "bootstrap"
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import LlModal from './LlModal.vue'

    const { t, locale } = useI18n()
    
    const resultPlugin = inject('resultPlugin')

    const props = defineProps({
        title: {
            type: String,
            default: ''
        },
        hasNext: {
            type: Boolean,
            default: true
        }
    })

    const isActive = ref(false)
    const resultCount = ref(0)
    const totalCount = ref(0)
    const currentLevel = ref('')
    const nextLevel = ref('')
    const levelClear = ref(false)
    const preventNext = ref(true)

    const modal = ref(null) // template ref (child instance)
    const simpleroContainer = ref(null) // template ref
    const popover = ref(null)
    const popoverTitle = ref(t('app.checkanswers.holdontitle'))
    const popoverBody = ref(t('app.checkanswers.holdonbody'))
    var pop = null

    const simplero = document.querySelector('.simplero')

    watch(locale, () => {
        pop.setContent({
            '.popover-header': t('app.checkanswers.holdontitle'),
            '.popover-body': t('app.checkanswers.holdonbody')
        })
    });

    resultPlugin.on('touched', params => {
        if (params.level === props.title && params.all) {
            pop.disable()
        }
    })

    function checkResults() {
        const results = resultPlugin.check(props.title)
        if (results.touchedCount < results.count) {
            return
        }
        else pop.disable()
        updateModal(results)
        modal.value.open()
    }

    function onModalHide() {
        resultPlugin.advance()
        modal.value.close()
    }

    function updateModal(results) {
        currentLevel.value = resultPlugin.getCurrentLevel()
        nextLevel.value = resultPlugin.getNextLevel()
        levelClear.value = results.errorPercent < 20
        preventNext.value = !levelClear.value || nextLevel.value === ''
        resultCount.value = results.count - results.errorCount
        totalCount.value = results.count
        simpleroContainer.value.appendChild(simplero)
        simplero.classList.remove('invisible')
    }

    onBeforeMount(() => {
        resultPlugin.addLevel(props.title)
        isActive.value = resultPlugin.getCurrentLevel() === props.title
    })

    onMounted(() => {
        pop = Popover.getOrCreateInstance(popover.value, {
            trigger: 'focus',
            container: 'body'
        })
    })

</script>