<template>
  <h1>asdasd</h1>
</template>

<script>
import { QuestionList } from "../helpers/questionsList";

export default {
  data() {
    return {
      categories: [],
    };
  },
  created: function() {
    const categories = this.fillterCategories(QuestionList);
    this.setCategoryColor(categories);
    console.log(this.categories);
  },
  methods: {
    fillterCategories(questionsList) {
      let categoriesArr = [];
      questionsList.forEach((question) => {
        if (!categoriesArr.includes(question.category))
          this.categories.push(question.category);
      });
      return categoriesArr;
    },
    setCategoryColor(categories) {
      categories.forEach((category) => {
        let categoryColor = "";
        switch (category) {
          case "light":
              categoryColor = '#3b3d95';
            break;
          case "chill":
              categoryColor = '#3b3d95';
            break;
          case "dirty":
              categoryColor = '#3b3d95';
            break;
          case "intimate":
              categoryColor = '#3b3d95';
            break;
            default:
                categoryColor = '#000000'; 
            break;
        }
      });
    },
  },
};
</script>

<style></style>
