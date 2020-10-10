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
    created: function () {
        const categories = this.fillterCategories(QuestionList);
        this.setCategoryColor(categories);
        console.log(this.categories);
    },
    methods: {
        fillterCategories(questionsList){
            let categoriesArr = [];
            questionsList.forEach( question => {
                if (!categoriesArr.includes(question.category))
                 this.categories.push(question.category);
            });
            return categoriesArr;
        },
        setCategoryColor (categories) {
            categories.forEach((category) => {
                switch(category) {
                    
                }
            });
        }
    }
}

</script>

<style>

</style>