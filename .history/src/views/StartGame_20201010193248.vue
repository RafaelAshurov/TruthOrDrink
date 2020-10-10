<template>
    <div class="start-game-page">
        <div class="start-game-logo-container">
            <h1 class="capital-font">
                truth <br />
                or <br />
                drink
            </h1>
        </div>
        <button @click="moveToCategpries()" type="button" class="btn btn-bg capital-font">
            New Game
        </button>
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

<style lang="scss">
.start-game-page {
    .start-game-logo-container {
        img {
            max-width: 240px;
        }
    }
}
</style>
