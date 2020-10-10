<template>
    <div class="question-page text-center">
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
                {{ myQuestions[counter].category }}
            </p>
        </div>
    </div>
</template>

<script>
import { QuestionList } from "../helpers/questionsList";

export default {
    props: {
        selectedCategories: ""
    },
    data() {
        return {
            categories: [],
            myQuestions: [],
            counter: 0
        };
    },
    methods: {
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
        }
    },
    created: function() {
        // Get saved questions from prev games
        let localQuestionList = window.localStorage.getItem("questions");

        // Start new game if there is no saved questions list or no categories.
        if (!this.selectedCategories && !localQuestionList) this.$router.push("/");

        if (localQuestionList) {
        } else if (this.selectedCategories) {
            this.categories = JSON.parse(this.selectedCategories);

            //Get only the questions that match our selected categories
            let relevantQuestions = QuestionList.filter(question => {
                return this.categories.includes(question.category);
            });
            this.myQuestions = relevantQuestions;
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
