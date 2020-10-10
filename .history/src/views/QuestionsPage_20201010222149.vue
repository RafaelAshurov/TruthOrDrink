<template>
    <div
        class="question-page text-center site-card"
        v-if="myQuestions[counter]"
        :class="{ 'site-card-collapse': collapsed }"
    >
        <span class="questions-count">
            {{ `( ${counter + 1} / ${myQuestions.length} )` }}
        </span>
        <div class="category-wrapper">
            <span
                class="category-name"
                :style="{ 'background-color': getCategoryColor(myQuestions[counter].category) }"
            >
                {{ myQuestions[counter].category }}
            </span>
        </div>
        <div class="question-wrapper">
            <p class="question">
                {{ myQuestions[counter][`en`] }}
            </p>
        </div>
        <button
            @click="nextQuestion()"
            type="button"
            class="btn btn-bg"
            :disabled="itsTheLastQuestion"
        >
            Next
        </button>
        <button
            @click="prevQuestion()"
            type="button"
            class="btn btn-bg"
            :disabled="itsTheFirstQuestion"
        >
            Prev
        </button>
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
            collapsed: true
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
            this.counter++;
            window.localStorage.setItem("counter", this.counter);
            this.checkBtnsStatus();
        },
        prevQuestion() {
            this.counter--;
            window.localStorage.setItem("counter", this.counter);
            this.checkBtnsStatus();
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
        this.collapsed = true;
        this.checkBtnsStatus();
    },
    created: function() {
        // Get saved questions from prev games
        let localQuestionList = JSON.parse(window.localStorage.getItem("questions"));

        // Start new game if there is no saved questions list or no categories.
        if (!this.selectedCategories && localQuestionList && localQuestionList.length === 0)
            this.$router.push("/");

        if (localQuestionList && localQuestionList.length > 0) {
            // Get prev counter
            let counter = window.localStorage.getItem("counter");
            if (counter) this.counter = Number(counter);

            this.myQuestions = localQuestionList;
        } else if (this.selectedCategories) {
            this.categories = JSON.parse(this.selectedCategories);

            //Get only the questions that match our selected categories
            let relevantQuestions = QuestionList.filter(question => {
                return this.categories.includes(question.category);
            });
            //Shuffle the questions
            this.myQuestions = this.shuffle(relevantQuestions);

            //Save the new list to local storage
            window.localStorage.setItem("questions", JSON.stringify(this.myQuestions));
        }

        this.collapsed = false;
    }
};
</script>

<style lang="scss">
.question-page {
    .category-wrapper {
        .category-name {
            color: #ffffff;
        }
    }
}
</style>
