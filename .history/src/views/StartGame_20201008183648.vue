<template>
    <div class="d-inline-block">
        <div class="start-game-logo-container">
        <img src="@/assets/tod.png" alt="site logo">
    </div>
    <router-link to="/chose-your-categories">Home</router-link>
    <button type="button" class="btn btn-bg">Let's drink!</button>
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
    margin-top: 40px;
    width: 90%;
    padding: 45px;
    background-color: #25D366;
    color: #ffffff;
    font-size: 22px;
    font-weight: 600;
}
</style>