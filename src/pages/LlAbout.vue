<template>

  <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h2 class="display-4 fw-bold lh-1 text-body-emphasis">{{ $t('about.title') }}</h2>
        <p class="lead">
          {{ $t('about.lead') }}
        </p>
        <p>
          {{ $t('about.body1') }}
        </p>
        <p>
          {{ $t('about.body2') }}
        </p>
        <p>
          {{ $t('about.body3') }}
        </p>
        <div class="mb-4 mb-lg-3">
            <a href="#/questions" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">{{ $t('general.starttest') }}</a>
        </div>
        <div class="mb-4 mb-lg-3">
          <a href="#/" class="link-secondary">&lt;- {{ $t('general.back') }}</a>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="https://picsum.photos/id/1/800/600" alt="" width="720">
      </div>
    </div>
  </div>

</template>

<script setup>
</script>