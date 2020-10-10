<template>
    <div class="d-inline-block">
        <div class="start-game-logo-container">
            <h1 class="capital-font">
                truth <br />
                or <br />
                drink
            </h1>
        </div>
        <button @click="moveToCategpries()" type="button" class="btn btn-bg">New Game</button>
    </div>
</template>

<script>
export default {
    methods: {
        moveToCategpries() {
            this.$router.push("/chose-your-categories");
        }
    },
    created: function() {
        let localQuestionList = JSON.parse(window.localStorage.getItem("questions"));
        if (localQuestionList.length > 0) this.$router.push({ name: "questionsPage" });
    }
};
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
    background-color: #12c298;
    color: #ffffff;
    font-size: 22px;
    font-weight: 600;
    border-radius: 15px;
}
</style>
