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
.site-card.collapsed {
    max-height: 0;
    padding: 15px 0 0;
    overflow: hidden;
}
.site-card.collapsed.shrink {
    width: 25%;
}
body {
    background-color: #273446;
    color: #ffffff;
    font-family: "Chilanka", cursive;
}
* {
    transition: all 0.2s;
}
</style>
