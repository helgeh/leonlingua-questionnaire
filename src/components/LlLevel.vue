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
                <button v-if="hasNext" @click="checkResults" class="btn btn-primary">SJEKK SVARENE!</button>
            </div>

        </div>

        <LlModal :on-dismiss="onModalHide" :disabled="preventNext" ref="modal">

            <template v-slot:title>Resultater for nivå {{currentLevel}}</template>

            <template v-slot:body>

                <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Du klarte {{ resultCount }} av {{ totalCount }} spørsmål!</h4>
                    <p>
                        Var dette utfordring nok kan du registrere din epost hos oss og du vil få tilsendt alle svarene og tilbud på kurs tilpasset ditt nivå!
                    </p>
                    <hr>
                    <p class="mb-0">Fyll inn skjemaet under:</p>
                </div>
                
                <div ref="simpleroContainer">
                </div>
                
                <div v-if="!preventNext" class="alert alert-secondary mt-2" role="alert">
                    <h5 class="alert-heading">Vil du ha mer utfordring?</h5>
                    <p class="mb-0">
                        Med nesten alle svarene riktig er du velkommen til å ta testen for neste nivå ({{ nextLevel }}). Da trykker du på den grønne knappen under for å gå videre.
                    </p>
                </div>

            </template>

        </LlModal>

  
    </div>


</template>

<script setup>

    import { defineProps, ref, inject, onBeforeMount } from 'vue'
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
    const preventNext = ref(true)

    const modal = ref(null) // template ref (child instance)
    const simpleroContainer = ref(null) // template ref

    const simplero = document.querySelector('.simplero')


    function checkResults() {
        const results = resultPlugin.check(props.title)
        if (results.errorPercent > 99)
            return
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
        preventNext.value = results.errorPercent > 20 || nextLevel.value === ''
        resultCount.value = results.count - results.errorCount
        totalCount.value = results.count
        simpleroContainer.value.appendChild(simplero)
        simplero.classList.remove('invisible')
    }

    onBeforeMount(() => {
        resultPlugin.addLevel(props.title)
        isActive.value = resultPlugin.getCurrentLevel() === props.title
    })

</script>