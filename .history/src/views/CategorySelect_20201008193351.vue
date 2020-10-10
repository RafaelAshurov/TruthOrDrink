<template>
  <h1>asdasd</h1>
</template>

<script>
import {QuestionList} from '../helpers/questionsList';

export default {
    data(){
        return {
            categories: []
        }
    },
    created: () => {
        this.fillterCategories(QuestionList);
        console.log(this.categories);
    },
    methods: {
        fillterCategories(questionsList){
            questionsList.forEach( question => {
                if (!this.categories.includes(question.category)) this.categories.push(question.category);
            });
        }
    }
}

</script>

<style>

</style>