<template>
    <div
        class="question-page text-center site-card"
        v-if="myQuestions[counter]"
        :class="{ 'site-card-collapse': collapsed }"
    >
        <span class="questions-count">
            {{ `( ${counter + 1} / ${myQuestions.length} )` }}
        </span>
        <div class="question-container">
            <div
                class="question-wrapper"
                :class="{ 'question-collapse': questionCollaps }"
                :style="{ 'border-color': getCategoryColor(myQuestions[counter].category) }"
            >
                <div
                    class="category-wrapper"
                    :style="{ 'background-color': getCategoryColor(myQuestions[counter].category) }"
                >
                    {{ myQuestions[counter].category }}
                </div>
                <p
                    class="question"
                    :style="{ color: getCategoryColor(myQuestions[counter].category) }"
                >
                    {{ myQuestions[counter][`en`] }}
                </p>
            </div>
        </div>
        <div class="btn-container d-flex ">
            <button
                @click="prevQuestion()"
                type="button"
                class="btn btn-bg"
                :disabled="itsTheFirstQuestion"
            >
                Prev
            </button>
            <button
                @click="nextQuestion()"
                type="button"
                class="btn btn-bg"
                :disabled="itsTheLastQuestion"
            >
                Next
            </button>
        </div>
        <button @click="startNewGame()" type="button" class="btn btn-bg">
            Start a new game
        </button>
    </div>
</template>

<script>
import { QuestionList } from "../helpers/questionsList";

export default {
    props: {
        selectedCategories: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            categories: [],
            myQuestions: [],
            counter: 0,
            itsTheLastQuestion: false,
            itsTheFirstQuestion: false,
            collapsed: true,
            questionCollaps: false
        };
    },
    methods: {
        startNewGame() {
            if (confirm("Are you sure you want to start a new game?")) {
                this.collapsed = true;
                setTimeout(() => {
                    window.localStorage.clear();
                    this.$router.push("/");
                }, 400);
            }
        },
        nextQuestion() {
            this.questionCollaps = true;
            setTimeout(() => {
                this.counter++;
                window.localStorage.setItem("counter", this.counter);
                this.checkBtnsStatus();
                this.questionCollaps = false;
            }, 400);
        },
        prevQuestion() {
            this.questionCollaps = true;
            setTimeout(() => {
                this.counter--;
                window.localStorage.setItem("counter", this.counter);
                this.checkBtnsStatus();
                this.questionCollaps = false;
            }, 400);
        },
        checkBtnsStatus() {
            this.itsTheFirstQuestion = this.counter === 0 ? true : false;
            this.itsTheLastQuestion = this.counter + 1 === this.myQuestions.length ? true : false;
        },
        getCategoryColor(categoryName) {
            switch (categoryName) {
                case "chill":
                    return "#ecca4e";
                    break;
                case "dirty":
                    return "#ec4e70";
                    break;
                case "intimate":
                    return "#4e70ec";
                    break;
                default:
                    return "#000000";
                    break;
            }
        },
        // Why its so hard to shuffle arrays!!!?!??!?!
        shuffle(array) {
            var currentIndex = array.length,
                temporaryValue,
                randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
    },
    mounted: function() {
        this.checkBtnsStatus();
    },
    created: function() {
        //Collaps the site card
        this.collapsed = true;

        // Get saved questions from prev games
        let localQuestionList = JSON.parse(window.localStorage.getItem("questions"));

        // Start new game if there is no saved questions list or no categories.
        if (!this.selectedCategories && localQuestionList && localQuestionList.length === 0)
            this.$router.push("/");

        if (this.selectedCategories) {
            this.categories = JSON.parse(this.selectedCategories);

            //Get only the questions that match our selected categories
            let relevantQuestions = QuestionList.filter(question => {
                return this.categories.includes(question.category);
            });
            //Shuffle the questions
            this.myQuestions = this.shuffle(relevantQuestions);

            //Save the new list to local storage
            window.localStorage.setItem("questions", JSON.stringify(this.myQuestions));
        } else if (localQuestionList && localQuestionList.length > 0) {
            // Get prev counter
            let counter = window.localStorage.getItem("counter");
            if (counter) this.counter = Number(counter);

            this.myQuestions = localQuestionList;
        }

        this.collapsed = false;
    }
};
</script>

<style lang="scss">
.question-page {
    .questions-count {
        margin-bottom: 10px;
        display: inline-block;
    }

    .question-container {
        height: 270px;
    }

    .question-wrapper {
        font-size: 20px;
        max-height: 270px;
        border-bottom: 3px solid;
        border-radius: 10px;
        overflow: hidden;

        .category-wrapper {
            color: #ffffff;
            border-radius: 10px;
            padding-top: 3px;
        }
        p.question {
            padding: 20px 10px 0px;
        }
    }
    .question-wrapper.question-collapse {
        max-height: 10px;
    }
}
</style>
