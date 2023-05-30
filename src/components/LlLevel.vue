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
                    <button @click="checkResults" class="btn btn-secondary">Next</button>
                </div>

            </div>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="response">
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                        </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

      
        </div>

</template>

<script>

import {Modal} from "bootstrap"
    
  export default {
    props: ['title'],
    inject: ['resultPlugin', 'globalCount'],
    data() {
      return {
        ok: false,
        isActive: false
      }
    },
    methods: {
      checkResults() {
        var results = this.resultPlugin.check(this.title);
        this.ok = results.done;
        if (this.ok) {
          const el = this.$el.querySelector('#staticBackdrop');
          this.updateModal(el, results);
          const modal = new Modal(el);
          modal.show();
          // document.querySelector('#questionnaire').appendChild(document.querySelector('.modal-backdrop'));
          // document.body.classList.remove('modal-open');
          el.addEventListener('hide.bs.modal', this.onModalHide.bind(this));
        }
      },
      onModalHide() {
        const el = this.$el.querySelector('#staticBackdrop');
        this.resultPlugin.advance();
        el.removeEventListener('hide.bs.modal', this.onModalHide);
      },
      updateModal(el, results) {
        const currentLevel = this.resultPlugin.getCurrentLevel();
        const nextLevel = this.resultPlugin.getNextLevel();
        const modalTitle = el.querySelector('.modal-title');
        const modalBody = el.querySelector('.modal-body .response');
        modalTitle.textContent = `Level ${currentLevel} finished!`;
        modalBody.textContent = `You completed all ${results.count} questions. Now advance to ${nextLevel}!`
        // let simplero = document.createElement('script');    
        // simplero.setAttribute('id', '_simplero_landing_page_js_290409');
        // simplero.setAttribute('src','https://hablaonline.simplero.com/page/290409.js');
        // simplero.setAttribute('async', '');
        let simplero = document.querySelector('.simplero.invisible');
        modalBody.appendChild(simplero);
        simplero.classList.remove('invisible');
        /*

                <script async id="_simplero_landing_page_js_290409" src="https://hablaonline.simplero.com/page/290409.js"><\/script>
        */
      }
    },
    created() {
    },
    beforeMount() {
      this.resultPlugin.addLevel(this.title);
      this.isActive = this.resultPlugin.getCurrentLevel() === this.title;
    }
  }

</script>