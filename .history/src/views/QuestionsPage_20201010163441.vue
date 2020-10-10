<template>
    <div class="question-page text-center" v-if="myQuestions[counter]">
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
            default: ""
        }
    },
    data() {
        return {
            categories: [],
            myQuestions: [],
            counter: 0,
            itsTheLastQuestion: false,
            itsTheFirstQuestion: false
        };
    },
    methods: {
        startNewGame() {
            if (confirm("Are you sure you want to start a new game?")) {
                window.localStorage.clear();
                this.$router.push("/");
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
                case "light":
                    return "#3b3d95";
                    break;
                case "chill":
                    return "#ffce00";
                    break;
                case "dirty":
                    return "#e32526";
                    break;
                case "intimate":
                    return "#140f3a";
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
        // Get saved questions from prev games
        let localQuestionList = window.localStorage.getItem("questions");

        // Start new game if there is no saved questions list or no categories.
        if (!this.selectedCategories && !localQuestionList) this.$router.push("/");

        if (localQuestionList) {
            // Get prev counter
            let counter = window.localStorage.getItem("counter");
            if (counter) this.counter = Number(counter);

            this.myQuestions = JSON.parse(localQuestionList);
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

            console.log(this.myQuestions);
        }
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
