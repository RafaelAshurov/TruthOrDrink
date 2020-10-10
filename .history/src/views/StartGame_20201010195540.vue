<template>
    <div class="start-game-page site-card">
        <div class="start-game-logo-container">
            <h1 class="capital-font site-logo">
                truth <br />
                or <br />
                drink
            </h1>
        </div>
        <button
            @click="moveToCategpries()"
            type="button"
            class="btn btn-bg capital-font new-game-btn"
        >
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
        h1.site-logo {
            font-weight: 600;
        }
    }
    .new-game-btn {
        margin-top: 25px;
        padding: 15px;
        width: 90%;
    }
}
</style>
