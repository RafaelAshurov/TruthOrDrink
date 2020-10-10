<template>
    <div class="start-game-page site-card">
        <div class="start-game-logo-container gradient-border">
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

    //Border animation
    // gradient: https://www.gradientmagic.com/collection/rainbowstandard
    @import url("https://fonts.googleapis.com/css?family=Lato:300");

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #222;
    }

    .gradient-border {
        --border-width: 3px;

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 200px;
        font-size: 2.5rem;
        text-transform: uppercase;
        color: white;
        background: #222;
        border-radius: var(--border-width);

        &::after {
            position: absolute;
            content: "";
            top: calc(-1 * var(--border-width));
            left: calc(-1 * var(--border-width));
            z-index: -1;
            width: calc(100% + var(--border-width) * 2);
            height: calc(100% + var(--border-width) * 2);
            background: linear-gradient(
                60deg,
                hsl(224, 85%, 66%),
                hsl(269, 85%, 66%),
                hsl(314, 85%, 66%),
                hsl(359, 85%, 66%),
                hsl(44, 85%, 66%),
                hsl(89, 85%, 66%),
                hsl(134, 85%, 66%),
                hsl(179, 85%, 66%)
            );
            background-size: 300% 300%;
            background-position: 0 50%;
            border-radius: calc(2 * var(--border-width));
            animation: moveGradient 4s alternate infinite;
        }
    }

    @keyframes moveGradient {
        50% {
            background-position: 100% 50%;
        }
    }
}
</style>
