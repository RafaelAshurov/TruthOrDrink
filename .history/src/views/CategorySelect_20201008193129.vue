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
    },
    methods: {
        fillterCategories(questionsList){
            questionsList.forEach( question => {
                if (!this.categories?.includes(question?.category))

            });
        }
    }
}

</script>

<style>

</style>