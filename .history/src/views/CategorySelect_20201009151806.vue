<template>
    <div>
        <h1>Select our categories</h1>
        <p>Multipile categories are availible...</p>
        <div
            class="category-wrapper"
            v-for="category in categories"
            :key="category.id"
        ></div>
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

<style lang="scss">
$on: rgba(133,255,122,1);
$off: rgba(44,63,82,1);
$selected: rgba(21,32,42,1);

.transition {
    @include transition( all 0.25s cubic-bezier(.75,.01,.48,2))
}


.bgTransition{
  @include transition( all 0.25s ease-in-out )
}
// styling pseudo attributes
input[type=radio] , input[type=checkbox] {
  position: relative

  &:before , &:after
    content: ""
    position: absolute

  &:before
    height: 100%

  &[type=radio]
    border-radius: 30px

    &:before
      width: 100%
      border-radius: 30px
      background-color: $off
      box-shadow: 0 0 0 1px $off
      @extend .bgTransition

    &:after
      width: 100%
      height: 100%
      border-radius: 30px
      background-color: $selected
      @include scale( 0 , 0 )
      @extend .transition

    &:checked
      &:after
        @include scale( 0.75 , 0.75 )

      &:before
        background-color: $on
        box-shadow: 0 0 0 1px $on

  &[type=checkbox]

    &:before
      width: 200%
      background-color: $off
      box-shadow: 0 0 0 1px $off
      @include translate( -25% , 0 )
      border-radius: 30px
      @extend .bgTransition

    &:after
      width: 80%
      height: 80%
      margin-top: 10%
      margin-left: 10%
      background-color: $selected
      border-radius: 30px
      @include translate( 60% , 0 )
      @extend .transition

    &:checked
      &:after
        @include translate( -60% , 0 )

      &:before
        background-color: $on
        box-shadow: 0 0 0 1px $on
}
// holder + basic styling
*
  -webkit-tap-highlight-color: rgba(0,0,0,0)
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none

html
  background-color: $selected

input
  display: block
  margin: 36px

  &[type=radio] , &[type=checkbox]
    cursor: pointer
    width: 30px
    height: 30px

.radio , .check
  position: absolute
  @include translate( -50% , -50% )
  top: 50%
  left: 50%

.radio
  margin-left: -36px

.check
  margin-left: 36px
</style>
