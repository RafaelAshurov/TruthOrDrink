<template>
    <div><h1>asdasdasd</h1></div>
</template>

<script>
export default {
    props: {
        selectedCategories: ""
    },
    created: function() {
        // Get saved questions from prev games
        let localQuestionList = window.localStorage.getItem("questions");

        // Start new game if there is no saved questions list or no categories.
        if (!this.selectedCategories && !localQuestionList) this.$router.push("/");

        if (localQuestionList) {
        } else {
            this.selectedCategories = JSON.parse(this.selectedCategories);
            console.log(this.selectedCategories);
        }
    }
};
</script>

<style lang="scss"></style>
