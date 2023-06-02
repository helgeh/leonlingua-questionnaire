<template>
    
    <div class="modal fade" :class="{'show': showModal}" id="staticBackdrop" ref="el" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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

<script setup>

    import { ref, defineProps, defineExpose } from 'vue'
    import { Modal } from 'bootstrap'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    const showModal = ref(false)
    const el = ref(null) // template ref

    const props = defineProps({
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
    })

    function closeModal() {
        showModal.value = false;
    }

    function goNext() {
        closeModal();
        props.onDismiss();
    }

    defineExpose({
        open() {
            new Modal(el.value).show()
        },
        close() {
            new Modal(el.value).hide()
        },
        el
    })

</script>

