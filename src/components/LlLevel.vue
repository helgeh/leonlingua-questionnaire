<template>
    
        <div :class="{ 'carousel-item': true, active: isActive }">

            <div class="card">
        
                <h5 class="card-header">
                    {{ title }}
                </h5>
                
                <ul class="list-group list-group-flush">
                    <slot />
                </ul>

                <div class="card-footer">
                    <button v-if="hasNext" @click="checkResults" class="btn btn-secondary">Neste</button>
                </div>

            </div>

            <LlModal :modal-title="modalTitle" :on-dismiss="onModalHide" :disabled="preventNext">
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
            </LlModal>

      
        </div>


</template>

<script>

import {Modal} from "bootstrap"

import LlModal from './LlModal.vue'
    
  export default {
    components: {LlModal},
    props: {title: {type: String, default: ''}, hasNext: {type: Boolean, default: true}},
    inject: ['resultPlugin', 'globalCount'],
    data() {
      return {
        ok: false,
        isActive: false,
        modalTitle: '',
        resultCount: 0,
        totalCount: 0,
        nextLevel: '',
        preventNext: true,
        modal: null
      }
    },
    methods: {
      checkResults() {
        const results = this.resultPlugin.check(this.title);
        const percent = (results.errorCount * 100) / results.count;
        this.ok = percent < 20; // results.done;
        // console.log(`err: ${results.errorCount}, tot: ${results.count}, percent: ${percent}, OK: ${this.ok}`)
        if (this.ok) {
            this.preventNext = false;
        }
        this.updateModal(this.modal, results);
        const modal = new Modal(this.modal);
        modal.show();
      },
      onModalHide() {
        // let simplero = document.querySelector('.simplero');
        // simplero.classList.add('invisible');
        this.resultPlugin.advance();
        // const el = this.$el.querySelector('#staticBackdrop');
        const modal = new Modal(this.modal);
        modal.hide();
      },
      updateModal(el, results) {
        const currentLevel = this.resultPlugin.getCurrentLevel();
        this.modalTitle = `Nivå ${currentLevel} fullført!`;
        this.resultCount = results.count - results.errorCount;
        this.totalCount = results.count;
        this.nextLevel = this.resultPlugin.getNextLevel();
        let simplero = document.querySelector('.simplero');
        el.querySelector('.modal-body .simplero-container').appendChild(simplero);
        simplero.classList.remove('invisible');
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
    }
  }

</script>