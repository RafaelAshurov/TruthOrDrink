<template>
  <div id="app" class="container-fluid">
    <div class="row justify-content-center text-center">
      <div class="col-12 col-md-8 col-lg-6 site-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  .site-content {
    padding-top: 50px;
  }
}
</style>
