<template>


<div class="container my-5">
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="arrow-right-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
    </symbol>
    <symbol id="check2-circle" viewBox="0 0 16 16">
      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"></path>
      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"></path>
    </symbol>
    <symbol id="questionmark" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
    </symbol>
  </svg>
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    <img src="../assets/logo.svg" class="logo mb-2" alt="Logo" height="260" />
    <h1 class="text-body-emphasis">Nivåtest i spansk</h1>
    <p class="col-lg-8 mx-auto fs-5 text-muted">
      Når du har funnet ditt nivå kan du legge igjen epostadressen din og få løsningen på oppgavene
    </p>
    <div class="d-inline-flex gap-2 mb-5">
      <a href="#/questions" class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill">
        Start testen
        <svg class="bi ms-2" width="24" height="24"><use xlink:href="#arrow-right-short"></use></svg>
      </a>
      <a href="#/about" class="d-inline-flex align-items-center btn btn-outline-secondary btn-lg px-4 rounded-pill">
        Hvordan?
      </a>
    </div>
  </div>
</div>


</template>

<script setup>

</script>

<style>
  
  .bi {
    vertical-align: -.125em;
    fill: currentColor;
  }

</style>