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
        console.log('asdasdasdasd');
        console.log(categories);
      categories.forEach((category) => {
        let categoryColor = "";
        switch (category) {
          case "light":
            categoryColor = "#3b3d95";
            break;
          case "chill":
            categoryColor = "#ffce00";
            break;
          case "dirty":
            categoryColor = "#e32526";
            break;
          case "intimate":
            categoryColor = "#140f3a";
            break;
          default:
            categoryColor = "#000000";
            break;
        }
        this.categories.push({
          name: category,
          color: categoryColor,
        });
      });
    },
  },
};
</script>

<style></style>
