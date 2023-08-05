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
                    <a v-if="hasNext" @click="checkResults" tabindex="0" role="button" ref="popover" class="btn btn-primary popover-trigger" data-bs-trigger="focus" data-bs-placement="bottom" data-bs-title="Vent vent!" data-bs-content="Du må forsøke å løse oppgavene før du kan se hvor mange riktige du har! ;)">SJEKK SVARENE!</a>
                    <button v-if="!preventNext" @click="resultPlugin.advance()" class="btn btn-light">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </button>
                </div>
            </div>

        </div>

        <LlModal :on-dismiss="onModalHide" :disabled="preventNext" ref="modal">

            <template v-slot:title>Resultater for nivå {{currentLevel}}</template>

            <template v-slot:body>

                <div class="alert" :class="{ 'alert-success': levelClear, 'alert-info': !levelClear }" role="alert">
                    <h4 class="alert-heading">Gratulerer!</h4>
                    <p>
                        Du klarte <strong>{{ resultCount }}</strong> av <strong>{{ totalCount }}</strong> spørsmål!
                    </p>
                    <hr />
                    <p v-if="!levelClear" class="mb-0">
                        Det ser ut som du har nådd ditt nivå. Registrer deg med navn og epost her, så får du tilsendt svarene på testen og forslag/tilbud om kurs tilpasset ditt nivå.
                    </p>
                    <p v-if="levelClear && !preventNext" class="mb-0">
                        Da kan du gå videre til neste nivå.
                    </p>
                    <p v-if="levelClear && preventNext" class="mb-0">
                        Du er ved veis ende. Les mer om Cervantes og nivåene <a href="https://leonlingua.no/qu_end">her</a>.
                    </p>
                </div>

                <p v-if="levelClear && !preventNext">
                    <a class="btn btn-secondary" data-bs-toggle="collapse" href="#collapseSimplero" role="button" aria-expanded="false" aria-controls="collapseSimplero">
                        Registrer <font-awesome-icon icon="fa-solid fa-caret-down" />
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

    import { defineProps, ref, inject, onBeforeMount, onMounted } from 'vue'
    import { Popover } from "bootstrap"
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import LlModal from './LlModal.vue'
    
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
    var pop = null
    // const popTitle = ref('Vent vent!')
    // const popContent = ref('Du må forsøke å løse oppgavene før du kan se hvor mange riktige du har! ;)')

    const simplero = document.querySelector('.simplero')


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