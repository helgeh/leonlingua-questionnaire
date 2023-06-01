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

        <LlModal :on-dismiss="onModalHide" :disabled="preventNext">

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
                
                <div class="simplero-container">
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

<script>

    import {Modal} from "bootstrap"

    import LlModal from './LlModal.vue'
        
    export default {
        components: {LlModal},
        inject: ['resultPlugin', 'globalCount'],
        props: {
            title: {
                type: String,
                default: ''
            },
            hasNext: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                isActive: false,
                resultCount: 0,
                totalCount: 0,
                currentLevel: '',
                nextLevel: '',
                preventNext: true,
                modal: null
            }
        },
        methods: {
            checkResults() {
                const results = this.resultPlugin.check(this.title);
                if (results.errorPercent > 99)
                    return;
                this.updateModal(results);
                const modal = new Modal(this.modal);
                modal.show();
            },
            onModalHide() {
                this.resultPlugin.advance();
                const modal = new Modal(this.modal);
                modal.hide();
            },
            updateModal(results) {
                this.currentLevel = this.resultPlugin.getCurrentLevel();
                this.nextLevel = this.resultPlugin.getNextLevel();
                this.preventNext = results.errorPercent > 20 || this.nextLevel === '';
                this.resultCount = results.count - results.errorCount;
                this.totalCount = results.count;
                this.modal.querySelector('.modal-body .simplero-container').appendChild(this.simplero);
                this.simplero.classList.remove('invisible');
            }
        },
        created() {
        },
        beforeMount() {
            this.resultPlugin.addLevel(this.title);
            this.isActive = this.resultPlugin.getCurrentLevel() === this.title;
        },
        mounted() {
            this.modal = this.$el.querySelector('#staticBackdrop');
            this.simplero = document.querySelector('.simplero');
        }
    }

</script>