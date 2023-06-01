<template>

            <div class="modal fade" :class="{'show': showModal}" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ modalTitle }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <slot />
                  </div>
                  <div class="modal-footer">
                    <button type="button" :disabled="disabled" class="btn btn-success" data-bs-dismiss="modal" @click="goNext">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                        </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    };
  },
  props: {
    modalTitle: {
      type: String,
      default: 'Modal Title'
    },
    modalButtons: {
      type: Array,
      default: () => []
    },
    onDismiss: {
      type: Function,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    goNext() {
      this.closeModal();
      this.onDismiss();
    }
  }
};
</script>

<style>
/* Add Bootstrap CSS classes here if needed */
</style>
