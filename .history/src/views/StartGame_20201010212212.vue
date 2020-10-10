<template>
    <div class="start-game-page site-card" :class="{ 'site-card-collapse': collapsed }">
        <div class="start-game-logo-container gradient-border">
            <h1 class="capital-font site-logo">
                truth <br />
                - or - <br />
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
    data() {
        return {
            collapsed: false
        };
    },
    methods: {
        moveToCategpries() {
            this.collapsed = true;
            setTimeout(() => this.$router.push("/chose-your-categories"), 400);
        }
    },
    created: function() {
        let localQuestionList = JSON.parse(window.localStorage.getItem("questions"));
        if (localQuestionList && localQuestionList.length > 0)
            this.$router.push({ name: "questionsPage" });
    }
};
</script>

<style lang="scss">
.start-game-page {
    padding-top: 50px;
    padding-bottom: 50px;
    .start-game-logo-container {
        h1.site-logo {
            font-weight: 600;
            border-radius: 50%;
            border: 3px solid #ffffff;
            height: 250px;
            width: 250px;
            padding-top: 59px;
        }
    }
    .new-game-btn {
        margin-top: 25px;
        padding: 15px;
        width: 90%;
    }

    //Border animation
}
</style>
