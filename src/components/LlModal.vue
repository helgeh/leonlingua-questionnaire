<template>
    
    <div class="modal fade" :class="{'show': showModal}" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">

            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        <slot name="title"></slot>
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>

                <div class="modal-footer">
                    <button type="button" v-if="!disabled" class="btn btn-success" data-bs-dismiss="modal" @click="goNext">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </button>
                </div>

            </div>

        </div>
    </div>

</template>

<script>

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    export default {
        components: { FontAwesomeIcon },
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
    }
</script>
