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
    .alert.alert-danger.open {
        max-height: 100px;
    }
}
body {
    background-color: #1f2938;
    color: #ffffff;
}
* {
    transition: all 0.2s;
}
</style>
