<template>
    <div>
        <h1>Select our categories</h1>
        <p>Multipile categories are availible...</p>
        <div v-for="category in categories" :key="category.id"></div>
    </div>
</template>

<script>
import { QuestionList } from "../helpers/questionsList";

export default {
    data() {
        return {
            categories: [],
            selectedCategories: []
        };
    },
    created: function() {
        const categories = this.fillterCategories(QuestionList);
        this.setCategoriesObjects(categories);
    },
    mounted: function() {
        console.log(this.categories);
    },
    methods: {
        fillterCategories(questionsList) {
            let categoriesArr = [];
            questionsList.forEach(question => {
                if (!categoriesArr.includes(question.category))
                    categoriesArr.push(question.category);
            });
            return categoriesArr;
        },
        setCategoriesObjects(categories) {
            categories.forEach(categoryName => {
                let categoryObj = {};
                switch (categoryName) {
                    case "light":
                        categoryObj = {
                            id: 1,
                            name: categoryName,
                            color: "#3b3d95",
                            description:
                                "Chill questions for mixed company—with just enough of a bite to help you loosen up together."
                        };
                        break;
                    case "chill":
                        categoryObj = {
                            id: 2,
                            name: categoryName,
                            color: "#ffce00",
                            description:
                                "Only good times allowed with these feel-good questions for you and your drinking buddies. "
                        };
                        break;
                    case "dirty":
                        categoryObj = {
                            id: 3,
                            name: categoryName,
                            color: "#e32526",
                            description:
                                "Cringeworthy, adult-themed questions that pair nicely with adult beverages. NSFW—this one is all about sex in great detail. Skip printing this one if you don’t want that."
                        };
                        break;
                    case "intimate":
                        categoryObj = {
                            id: 4,
                            name: categoryName,
                            color: "#140f3a",
                            description:
                                "Warning: do not play these questions unless it’s very late and you’ve got nothing left to lose. NSFW—there’s swears in this one too"
                        };
                        break;
                    default:
                        categoryObj = {
                            name: categoryName,
                            color: "#000000",
                            description: ""
                        };
                        break;
                }
                this.categories.push(categoryObj);
            });
        }
    }
};
</script>

<style></style>
