<template>


  <div class="container my-5" v-if="show(0)">

  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="arrow-right-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
    </symbol>
    <symbol id="check2-circle" viewBox="0 0 16 16">
      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"></path>
      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"></path>
    </symbol>
  </svg>
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    <img src="../assets/logo.svg" class="logo mb-2" alt="Logo" height="260" />
    <h1 class="text-body-emphasis">{{ title }}</h1>
    <p class="col-lg-8 mx-auto fs-5 text-muted">
      {{ body }}
    </p>
    <div class="d-inline-flex gap-2 mb-5">
      <a href="#/questionnaire" class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill">
        Start testen
        <svg class="bi ms-2" width="24" height="24"><use xlink:href="#arrow-right-short"></use></svg>
      </a>
    </div>
  </div>
</div>


  <div class="container my-5" v-if="show(1)">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <img src="../assets/logo.svg" class="logo mb-2" alt="Logo" height="180" />
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">{{ title }}</h1>
        <p class="lead">{{ body }}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <a href="#/questionnaire" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Start testen</a>
          <a href="#/about" class="btn btn-outline-secondary btn-lg px-4">Hvordan?</a>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="https://picsum.photos/id/1/800/600" alt="" width="720">
      </div>
    </div>
  </div>
  

  <div class="container col-xl-10 col-xxl-8 px-4 py-5 my-5" v-if="show(2)">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <img src="../assets/logo.svg" class="logo mb-2" alt="Logo" height="180" />
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">{{ title }}</h1>
        <p class="col-lg-10 fs-4">{{ body }}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <a href="#/questionnaire" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Start testen</a>
          <a href="#/about" class="btn btn-outline-secondary btn-lg px-4">Hvordan?</a>
        </div>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-body-secondary">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-body-secondary">And some muted small print.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-body-secondary">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-body-secondary">And some muted small print.</small>
          </a>
        </div>
      </div>
    </div>
  </div>




<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="lightgreen"></rect></svg>
    <strong class="me-auto">LAYOUTER</strong>
    <small>kun for testing</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    <p>Elisabeth, her kan du se noen forskjellige eksempler på hvordan layout "forsiden" kan ha. Test med de tre knappene under.</p>
    <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
      <button type="button" @click="setIndex(0)" :class="{'active': show(0) }" class="btn btn-outline-primary">1</button>
      <button type="button" @click="setIndex(1)" :class="{'active': show(1) }" class="btn btn-outline-primary">2</button>
      <button type="button" @click="setIndex(2)" :class="{'active': show(2) }" class="btn btn-outline-primary">3</button>
    </div>
    <div>
      <p class="mt-3">Du kan også teste å bytte innholdet i heading og body med tekstfeltene under</p>
      <input v-model="title" class="form-control mt-1" />
      <input v-model="body" class="form-control mt-1" />
    </div>
  </div>
</div>

</template>

<script setup>

    import {
        ref, 
        onMounted
    } from 'vue'

    const index = ref(0)

    const title = ref("")
    const body = ref("")

    function setIndex(i) {
        index.value = i
        window.localStorage.setItem('current_index', i)
    }

    function show(i) {
        return index.value == i
    }

    onMounted(() => {
        var val = window.localStorage.getItem('current_index')
        if (val !== null)
          index.value = +val
        title.value = "Nivåtest i spansk"
        body.value = "Når du har funnet ditt nivå kan du legge igjen epostadressen din og få løsningen på oppgavene"
    })

</script>

<style>
  
  .bi {
    vertical-align: -.125em;
    fill: currentColor;
  }

</style>