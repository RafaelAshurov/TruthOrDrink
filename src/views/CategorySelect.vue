<template>
    <div class="category-select-page site-card" :class="{ 'site-card-collapse': collapsed }">
        <h1 class="capital-font">Select your categories</h1>
        <p>Multipile categories are availible...</p>
        <div class="categories-wrapper">
            <div class="category-container" v-for="category in categories" :key="category.id">
                <div class="category-btn" :style="{ 'background-color': category.color }">
                    <span
                        ><input
                            type="checkbox"
                            name="checkbox"
                            v-model="selectedCategories"
                            :value="category.name"
                    /></span>
                    <h4>
                        {{ category.name }}
                    </h4>
                </div>
                <p class="category-description" :style="{ color: category.color }">
                    {{ category.description }}
                </p>
            </div>
        </div>
        <div class="start-game-btn-wrapper">
            <div
                class="alert alert-danger"
                :class="noCategoriesAlert ? 'open-alert' : 'close-alert'"
                role="alert"
            >
                You have to chose at least one category
            </div>
            <button @click="startNewGame()" type="button" class="btn btn-bg">
                Start new game
            </button>
        </div>
    </div>
</template>

<script>
import { QuestionList } from "../helpers/questionsList";

export default {
    data() {
        return {
            categories: [],
            selectedCategories: [],
            noCategoriesAlert: false,
            collapsed: true
        };
    },
    created: function() {
        const categories = this.fillterCategories(QuestionList);
        this.setCategoriesObjects(categories);
    },
    computed: {},
    mounted: function() {
        this.collapsed = false;
    },
    methods: {
        fillterCategories(questionsList) {
            let categoriesArr = [];
            questionsList.forEach(question => {
                if (!categoriesArr.includes(question.category))
                    categoriesArr.push(question.category);
            });
            return categoriesArr;
        },
        setCategoriesObjects(categories) {
            categories.forEach(categoryName => {
                let categoryObj = {};
                switch (categoryName) {
                    case "chill":
                        categoryObj = {
                            id: 1,
                            name: categoryName,
                            color: "#ecca4e",
                            description:
                                "Only good times allowed with these feel-good questions for you and your drinking buddies. "
                        };
                        break;
                    case "dirty":
                        categoryObj = {
                            id: 2,
                            name: categoryName,
                            color: "#ec4e70",
                            description:
                                "Cringeworthy, adult-themed questions that pair nicely with adult beverages. NSFW—this one is all about sex in great detail. Skip printing this one if you don’t want that."
                        };
                        break;
                    case "intimate":
                        categoryObj = {
                            id: 3,
                            name: categoryName,
                            color: "#4e70ec",
                            description:
                                "Warning: do not play these questions unless it’s very late and you’ve got nothing left to lose. NSFW—there’s swears in this one too"
                        };
                        break;
                    default:
                        categoryObj = {
                            id: 4,
                            name: categoryName,
                            color: "#000000",
                            description: ""
                        };
                        break;
                }
                this.categories.push(categoryObj);
            });
        },
        startNewGame() {
            if (this.selectedCategories.length === 0) {
                this.noCategoriesAlert = true;
            } else {
                this.collapsed = true;
                setTimeout(() => {
                    this.$router.push({
                        name: "questionsPage",
                        params: { selectedCategories: JSON.stringify(this.selectedCategories) }
                    });
                }, 400);
            }
        }
    }
};
</script>

<style lang="scss">
.category-select-page.site-card {
    padding-bottom: 50px;

    h1.capital-font {
        margin-top: 10px;
        font-size: 35px;
    }
    .categories-wrapper {
        display: flex;
        flex-direction: column;
        padding-top: 19px;

        .category-container {
            display: inline-block;
            margin: 0 auto 18px;

            .category-btn {
                border-radius: 10px;
                display: flex;
                align-items: center;
                padding: 10px 0 0 0;

                h4 {
                    display: inline-block;
                    text-transform: uppercase;
                    color: #ffffff;
                    font-size: 22px;
                    margin-left: 23px;
                    margin-bottom: 2px;
                }
            }

            .category-description {
                padding-top: 10px;
            }
        }
    }
}

.transition,
input[type="radio"]:after,
input[type="checkbox"][type="radio"]:after,
input[type="checkbox"]:after {
    -moz-transition: all 0.25s cubic-bezier(0.75, 0.01, 0.48, 2);
    -o-transition: all 0.25s cubic-bezier(0.75, 0.01, 0.48, 2);
    -webkit-transition: all 0.25s cubic-bezier(0.75, 0.01, 0.48, 2);
    transition: all 0.25s cubic-bezier(0.75, 0.01, 0.48, 2);
}

.bgTransition,
input[type="radio"]:before,
input[type="checkbox"][type="radio"]:before,
input[type="checkbox"]:before {
    -moz-transition: all 0.25s ease-in-out;
    -o-transition: all 0.25s ease-in-out;
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
}

input[type="radio"],
input[type="checkbox"] {
    position: relative;
}
input[type="radio"]:before,
input[type="radio"]:after,
input[type="checkbox"]:before,
input[type="checkbox"]:after {
    content: "";
    position: absolute;
}
input[type="radio"]:before,
input[type="checkbox"]:before {
    height: 100%;
}
input[type="radio"][type="radio"],
input[type="checkbox"][type="radio"] {
    border-radius: 30px;
}
input[type="radio"][type="radio"]:before,
input[type="checkbox"][type="radio"]:before {
    width: 100%;
    border-radius: 30px;
    background-color: #2c3f52;
    box-shadow: 0 0 0 1px #2c3f52;
}
input[type="radio"][type="radio"]:after,
input[type="checkbox"][type="radio"]:after {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-color: #15202a;
    -moz-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
}
input[type="radio"][type="radio"]:checked:after,
input[type="checkbox"][type="radio"]:checked:after {
    -moz-transform: scale(0.75, 0.75);
    -ms-transform: scale(0.75, 0.75);
    -webkit-transform: scale(0.75, 0.75);
    transform: scale(0.75, 0.75);
}
input[type="radio"][type="radio"]:checked:before,
input[type="checkbox"][type="radio"]:checked:before {
    background-color: #85ff7a;
    box-shadow: 0 0 0 1px #85ff7a;
}
input[type="radio"][type="checkbox"]:before,
input[type="checkbox"][type="checkbox"]:before {
    width: 200%;
    background-color: #2c3f52;
    box-shadow: 0 0 0 1px #2c3f52;
    -moz-transform: translate(-25%, 0);
    -ms-transform: translate(-25%, 0);
    -webkit-transform: translate(-25%, 0);
    transform: translate(-25%, 0);
    border-radius: 30px;
}
input[type="radio"][type="checkbox"]:after,
input[type="checkbox"][type="checkbox"]:after {
    width: 80%;
    height: 80%;
    margin-top: 10%;
    margin-left: 10%;
    background-color: #15202a;
    border-radius: 30px;
    -moz-transform: translate(60%, 0);
    -ms-transform: translate(60%, 0);
    -webkit-transform: translate(60%, 0);
    transform: translate(60%, 0);
}
input[type="radio"][type="checkbox"]:checked:after,
input[type="checkbox"][type="checkbox"]:checked:after {
    -moz-transform: translate(-60%, 0);
    -ms-transform: translate(-60%, 0);
    -webkit-transform: translate(-60%, 0);
    transform: translate(-60%, 0);
}
input[type="radio"][type="checkbox"]:checked:before,
input[type="checkbox"][type="checkbox"]:checked:before {
    background-color: #85ff7a;
    box-shadow: 0 0 0 1px #85ff7a;
}

input {
    margin: 36px;
}
input[type="radio"],
input[type="checkbox"] {
    cursor: pointer;
    width: 25px;
    height: 25px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 24px;
}

.radio,
.check {
    position: absolute;
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}

.radio {
    margin-left: -36px;
}

.check {
    margin-left: 36px;
}
</style>
