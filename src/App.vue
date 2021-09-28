<template>
    <div id="app" class="container-fluid">
        <div class="row justify-content-center text-center">
            <div class="col-12 site-content">
                <router-view />
            </div>
            <div class="col-12 credits-row">
                Developed with &#10084; by Rafael Ashurov <br />
                <a href="https://www.playtruthordrink.com/" class="tod-link">
                    &#174; Truth or drink
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#app {
    max-width: 600px;
    margin: 0 auto;

    .site-content {
        padding: 50px 40px 40px;
    }
    button.btn {
        box-shadow: none;
    }
    .credits-row {
        color: #ffffff;

        .tod-link {
            font-size: 12px;
            text-decoration: none;
        }
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
    margin: 0;
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
    margin: 0 auto;
    max-height: 1000px;
    overflow: hidden;
}
.site-card.site-card-collapse {
    max-height: 0px;
    padding-top: 20px !important;
    padding-bottom: 0 !important;
}
body {
    background-color: #273446;
    color: #ffffff;
    font-family: "Chilanka", cursive;
}
* {
    transition: all 0.4s ease;
}
</style>
