<template>
    <div class="start-game-page site-card">
        <div class="start-game-logo-container">
            <div class="page-wrapper">
                <div class="circle-wrapper">
                    <div class="success circle"></div>
                    <div class="icon">
                        <h1 class="capital-font site-logo">
                            truth <br />
                            or <br />
                            drink
                        </h1>
                    </div>
                </div>
            </div>
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
    .circle-wrapper {
        position: relative;
        width: 100px;
        height: 100px;
    }
    // Logo animation
    .icon {
        position: absolute;
        color: #fff;
        font-size: 55px;
        top: 55px;
        left: 55px;
        transform: translate(-50%, -50%);
    }

    .circle {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        padding: 2.5px;
        background-clip: content-box;
        animation: spin 10s linear infinite;
    }

    .circle-wrapper:active .circle {
        animation: spin 2s linear infinite;
    }

    .success {
        background-color: #4bb543;
        border: 2.5px dashed #4bb543;
    }

    @keyframes spin {
        100% {
            transform: rotateZ(360deg);
        }
    }

    .page-wrapper {
        height: 100vh;
        background-color: #eee;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
