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
          categoriesArr.push(question.category);
      });
      return categoriesArr;
    },
    setCategoryColor(categories) {
      categories.forEach((categoryName) => {
        let categoryObj = {};
        switch (categoryName) {
          case "light":
              categoryObj = {
                  name: categoryName,
                  color: categoryColor,
                  description: '',
              }
            categoryColor = ;
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
