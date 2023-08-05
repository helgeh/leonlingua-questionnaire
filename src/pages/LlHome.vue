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
    <symbol id="logo">
      
    </symbol>
  </svg>
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    <svg id="prefix__Layer_1" data-name="Layer 1" viewBox="0 0 1273.5 1105" height="100"><defs><linearGradient id="prefix__linear-gradient" x1="909" y1="401.5" x2="683" y2="842.3" gradientTransform="matrix(1 0 0 -1 0 1106)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#319e00"/><stop offset="1" stop-color="#207203"/></linearGradient><linearGradient id="prefix__linear-gradient-2" x1="924.8" y1="911.8" x2="1871.2" y2="475.5" gradientTransform="matrix(1 0 0 -1 0 1106)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5fa400"/><stop offset="1" stop-color="#e7ff00"/></linearGradient><linearGradient id="prefix__linear-gradient-3" x1="825.7" y1="893.5" x2="1203.2" y2="660.3" gradientTransform="matrix(1 0 0 -1 0 1106)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5fa400"/><stop offset="1" stop-color="#e7ff00"/></linearGradient><linearGradient id="prefix__linear-gradient-4" x1="873.9" y1="994.6" x2="590.4" y2="659.1" gradientTransform="matrix(1 0 0 -1 0 1106)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5fa400"/><stop offset="1" stop-color="#e7ff00"/></linearGradient><linearGradient id="prefix__linear-gradient-5" x1="0" y1="869" x2="1060.5" y2="869" gradientTransform="matrix(1 0 0 -1 0 1106)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7ff00"/><stop offset="1" stop-color="#319e00"/></linearGradient><linearGradient id="prefix__linear-gradient-6" x1="589.7" y1="645.1" x2="625.5" y2="1070.2" gradientTransform="matrix(1 0 0 -1 0 1106)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5fa400"/><stop offset="1" stop-color="#e7ff00"/></linearGradient><linearGradient id="prefix__linear-gradient-7" x1="350.8" y1="494.3" x2="433" y2="1199.1" gradientTransform="matrix(1 0 0 -1 0 1106)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7ff00"/><stop offset="1" stop-color="#ff0"/></linearGradient><linearGradient id="prefix__linear-gradient-8" x1="448.9" y1="688.6" x2="338.2" y2="1186.4" gradientTransform="matrix(1 0 0 -1 0 1106)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7ff00"/><stop offset="1" stop-color="#ff0"/></linearGradient><linearGradient id="prefix__linear-gradient-9" x1="377.5" y1="729.1" x2="151.5" y2="1169.8" gradientTransform="matrix(-1 0 0 1 742 -328.6)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#319e00"/><stop offset="1" stop-color="#207203"/></linearGradient><linearGradient id="prefix__linear-gradient-10" x1="393.4" y1="1239.4" x2="1339.7" y2="803.1" gradientTransform="matrix(-1 0 0 1 742 -328.6)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5fa400"/><stop offset="1" stop-color="#e7ff00"/></linearGradient><linearGradient id="prefix__linear-gradient-11" x1="294.2" y1="1221.1" x2="671.7" y2="987.9" gradientTransform="matrix(-1 0 0 1 742 -328.6)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5fa400"/><stop offset="1" stop-color="#e7ff00"/></linearGradient><linearGradient id="prefix__linear-gradient-12" x1="342.4" y1="1322.2" x2="58.9" y2="986.6" gradientTransform="matrix(-1 0 0 1 742 -328.6)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5fa400"/><stop offset="1" stop-color="#e7ff00"/></linearGradient><linearGradient id="prefix__linear-gradient-13" x1="-531.5" y1="1196.6" x2="529" y2="1196.6" gradientTransform="matrix(-1 0 0 1 742 -328.6)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7ff00"/><stop offset="1" stop-color="#319e00"/></linearGradient><linearGradient id="prefix__linear-gradient-14" x1="-180.7" y1="821.9" x2="-98.5" y2="1526.7" gradientTransform="matrix(-1 0 0 1 742 -328.6)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7ff00"/><stop offset="1" stop-color="#ff0"/></linearGradient><linearGradient id="prefix__linear-gradient-15" x1="-82.6" y1="1016.2" x2="-193.3" y2="1514" gradientTransform="matrix(-1 0 0 1 742 -328.6)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7ff00"/><stop offset="1" stop-color="#ff0"/></linearGradient><linearGradient id="prefix__linear-gradient-16" x1="165.6" y1="559" x2="1112.2" y2="559" gradientTransform="matrix(1 0 0 -1 0 1106)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5fa400"/><stop offset="1" stop-color="#e7ff00"/></linearGradient></defs><g id="prefix__b"><g id="prefix__c"><path d="M1227.4 415C776.4 686.6 455.1-80.8 167 173.7a661.3 661.3 0 0 1 1060.5 241Z" fill="url(#prefix__linear-gradient)"/><path d="M434.4 24.6a661.3 661.3 0 0 1 793 390.3c-258 23-530.2-430.6-793-390.3Z" fill="url(#prefix__linear-gradient-2)"/><path d="M434.4 24.6c255.7-39.2 520.4 389.2 772.1 391.1-247.5-3.1-436.6-449.9-772-391Z" fill="url(#prefix__linear-gradient-3)"/><path d="M510.8 210.3c65.5 44.7 134 99.3 205.9 147.2 89.4-124.6 243-288.2 366-162.3A664 664 0 0 0 981 111.4c-251-86.2-470.3 99-470.3 99Z" fill="url(#prefix__linear-gradient-4)"/><path d="M0 415C451 686.6 772.3-80.8 1060.5 173.7A661.3 661.3 0 0 0 0 414.9Z" fill="url(#prefix__linear-gradient-5)"/><path d="M613.7 0C441.7 0 285 65.8 167.4 173.5c137.7-121.2 283-9.2 446.3 111C777.3 164 922.7 52 1060.5 173.8A658.7 658.7 0 0 0 613.7 0Z" fill="url(#prefix__linear-gradient-6)"/><path d="M793 24.6A661.3 661.3 0 0 0 0 415C258 438 481-46.2 793 24.6Z" fill="url(#prefix__linear-gradient-7)"/><path d="M17.1 415.7C268 416.7 488-44.6 793 24.7l-1.1-.4a315.9 315.9 0 0 0-244.2 31.9c-194 113.5-362.8 359-530.6 359.5Z" fill="url(#prefix__linear-gradient-8)"/><path d="M46.1 690c451-271.7 772.3 495.7 1060.5 241.2A661.3 661.3 0 0 1 46 690.2Z" fill="url(#prefix__linear-gradient-9)"/><path d="M839 1080.4A661.3 661.3 0 0 1 46 690c258.1-23 530.4 430.6 793 390.3Z" fill="url(#prefix__linear-gradient-10)"/><path d="M839 1080.4c-255.6 39.2-520.3-389.2-772-391 247.5 3 436.6 449.8 772 391Z" fill="url(#prefix__linear-gradient-11)"/><path d="M762.7 894.7c-65.5-44.7-134-99.3-205.9-147.2-89.4 124.6-243 288.2-366 162.3a664 664 0 0 0 101.6 83.8c251 86.2 470.3-99 470.3-99Z" fill="url(#prefix__linear-gradient-12)"/><path d="M1273.5 690C822.5 418.4 501.2 1185.8 213 931.3a661.3 661.3 0 0 0 1060.5-241Z" fill="url(#prefix__linear-gradient-13)"/><path d="M659.8 1105c172 0 328.7-65.7 446.3-173.5-137.7 121.2-283 9.2-446.3-111C496.3 941 350.8 1053 213 931.3A658.7 658.7 0 0 0 659.8 1105Z"/><path d="M480.6 1080.4a661.3 661.3 0 0 0 793-390.3c-258-23-481.1 461.1-793 390.3Z" fill="url(#prefix__linear-gradient-14)"/><path d="M1256.4 689.3c-250.8-1-470.9 460.4-775.9 391l1.1.4a315.9 315.9 0 0 0 244.2-31.9c194-113.5 362.8-359 530.6-359.5Z" fill="url(#prefix__linear-gradient-15)"/><path d="m1045.4 425.7-811-10c-37-.4-67.2 17.7-67.4 40.4l-1.4 170.2c-.1 22.8 29.8 41.6 66.9 42l640 8-75.2-1 192.2 2.4 54 .6c37 .5 67.2-17.6 67.4-40.4l1.3-170.1c.2-22.8-29.7-41.7-66.8-42.1Z" fill="url(#prefix__linear-gradient-16)"/><g style="isolation:isolate" fill="none"><text class="prefix__cls-11" transform="matrix(.92 0 0 1 187.7 527.6)"><tspan x="0" y="0">HABL</tspan></text><text transform="matrix(.92 0 0 1 421.6 527.6)" style="isolation:isolate" letter-spacing=".2em" font-family="CapucineBasic-Black,&quot;Capucine Basic&quot;" font-size="78.2" font-weight="800"><tspan x="0" y="0">A</tspan></text><text class="prefix__cls-7" transform="matrix(.92 0 0 1 481.6 527.6)"><tspan x="0" y="0">ONLINE</tspan></text><text class="prefix__cls-7" transform="matrix(.92 0 0 1 187.7 621.4)"><tspan x="0" y="0">MEDLEMSPL</tspan></text><text transform="matrix(.92 0 0 1 712.7 621.4)" style="isolation:isolate" letter-spacing=".1em" font-family="CapucineBasic-Black,&quot;Capucine Basic&quot;" font-size="78.2" font-weight="800"><tspan x="0" y="0">A</tspan></text><text transform="matrix(.92 0 0 1 768.4 621.4)" style="isolation:isolate" letter-spacing=".2em" font-family="CapucineBasic-Black,&quot;Capucine Basic&quot;" font-size="78.2" font-weight="800"><tspan x="0" y="0">T</tspan></text><text class="prefix__cls-11" transform="matrix(.92 0 0 1 829.5 621.4)"><tspan x="0" y="0">T</tspan></text><text transform="matrix(.92 0 0 1 887.6 621.4)" style="isolation:isolate" letter-spacing=".2em" font-family="CapucineBasic-Black,&quot;Capucine Basic&quot;" font-size="78.2" font-weight="800"><tspan x="0" y="0">F</tspan></text><text class="prefix__cls-7" transform="matrix(.92 0 0 1 938.1 621.4)"><tspan x="0" y="0">ORM</tspan></text></g></g></g></svg>
    <h1 class="text-body-emphasis">{{ title }}</h1>
    <p class="col-lg-8 mx-auto fs-5 text-muted">
      {{ body }}
    </p>
    <div class="d-inline-flex gap-2 mb-5">
      <a href="#/questionnaire" class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill">
        Start testen
        <svg class="bi ms-2" width="24" height="24"><use xlink:href="#arrow-right-short"></use></svg>
      </a>
      <!-- <a href="#/about" class="btn btn-outline-secondary btn-lg px-4 rounded-pill">
        Referanse
      </a> -->
    </div>
  </div>
</div>


  <div class="container my-5" v-if="show(1)">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">{{ title }}</h1>
        <p class="lead">{{ body }}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <a href="#/questionnaire" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Start testen</a>
          <a href="#/about" class="btn btn-outline-secondary btn-lg px-4">Om oss</a>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="https://picsum.photos/id/371/800/600" alt="" width="720">
      </div>
    </div>
  </div>
  

  <div class="container col-xl-10 col-xxl-8 px-4 py-5 my-5" v-if="show(2)">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">{{ title }}</h1>
        <p class="col-lg-10 fs-4">{{ body }}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <a href="#/questionnaire" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Start testen</a>
          <a href="#/about" class="btn btn-outline-secondary btn-lg px-4">Om oss</a>
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