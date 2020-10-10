<template>
  <h1>asdasd</h1>
</template>

<script>
import {QuestionList} from '../helpers/questionsList';

export default {
    data(){
        return {
            categories: null
        }
    },
    created: () => {
        this.fillterCategories(QuestionList);
    },
    methods: {
        fillterCategories(questionsList){
            questionsList.
        }
    }
}

</script>

<style>

</style>