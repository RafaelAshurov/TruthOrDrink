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
        padding: 50px 40px;
    }
}
.alert.alert-danger.open-alert {
    max-height: 100px;
}
.alert.alert-danger.close-alert {
    max-height: 0px;
    overflow: hidden;
    padding: 0;
    border: none;
}
.capital-font {
    font-family: "Chilanka", cursive !important;
    text-transform: uppercase;
}
button.btn {
    background-color: #12c298;
    color: #ffffff;
    font-size: 22px;
    font-weight: 400;
    border-radius: 15px;
}
.site-card {
    background-color: #1a222f;
    border-radius: 10px;
    padding: 30px 20px;
}
body {
    background-color: #273446;
    color: #ffffff;
}
* {
    transition: all 0.2s;
}
</style>
