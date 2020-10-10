<template>
    <div class="d-inline-block">
        <div class="start-game-logo-container">
        <img src="@/assets/tod.png" alt="site logo">
    </div>
    <button type="button" class="btn">Let's drink!</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.start-game-logo-container {
    img {
        max-width: 240px;
    }
}
button.btn {
    margin-top: 30px;
    width: 90%;
    padding: 45px;
    border-radius: 15px;
    background-color: #25D366;
    color: #ffffff;
    font-size: 22px;
    font-weight: 600;
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,1);
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,1);
}
</style>