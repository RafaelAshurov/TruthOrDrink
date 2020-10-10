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
    .btn-bg {
        border-radius: 15px;
        -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 1);
        -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 1);
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 1);
    }
}
body {
    background-color: #1f2938;
    color: ;
}
</style>
