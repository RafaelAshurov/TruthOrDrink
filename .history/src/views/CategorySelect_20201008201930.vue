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
              color: "#3b3d95",
              description: "Chill questions for mixed company—with just enough of a bite to help you loosen up together.",
            };
            break;
          case "chill":
            categoryObj = {
              name: categoryName,
              color: "#ffce00",
              description: "Only good times allowed with these feel-good questions for you and your drinking buddies. ",
            };
            break;
          case "dirty":
            categoryObj = {
              name: categoryName,
              color: "#e32526",
              description: "Cringeworthy, adult-themed questions that pair nicely with adult beverages. NSFW—this one is all about sex in great detail. Skip printing this one if you don’t want that.",
            };
            break;
          case "intimate":
            categoryObj = {
              name: categoryName,
              color: "#140f3a",
              description: "",
            };
            break;
          default:
            categoryObj = {
              name: categoryName,
              color: "#000000",
              description: "",
            };
            break;
        }
        this.categories.push(categoryObj);
      });
    },
  },
};
</script>

<style></style>
