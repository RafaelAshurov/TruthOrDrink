<template>
  <div id="app" class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <router-view />
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#app {

}
</style>
