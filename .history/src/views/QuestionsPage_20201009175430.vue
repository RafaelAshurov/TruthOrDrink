<template>
    <div>
        <h1>asdasdasd</h1>
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
            categories: []
        };
    },
    created: function() {
        // Get saved questions from prev games
        let localQuestionList = window.localStorage.getItem("questions");

        // Start new game if there is no saved questions list or no categories.
        if (!this.selectedCategories && !localQuestionList) this.$router.push("/");

        if (localQuestionList) {
        } else {
            this.categories = JSON.parse(this.selectedCategories);

            //Get only the questions that match our selected categories
            let relevantQuestions = QuestionList.filter(question => {
                return this.categories.includes(question.category);
            });

            console.log(relevantQuestions);
        }
    }
};
</script>

<style lang="scss"></style>
