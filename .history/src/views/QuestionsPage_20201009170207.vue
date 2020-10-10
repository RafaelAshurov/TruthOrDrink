<template>
    <div><h1>asdasdasd</h1></div>
</template>

<script>
export default {
    props: {
        selectedCategories: ""
    },
    created: function() {
        if (!this.selectedCategories) this.$router.push("/");
        console.log(this.selectedCategories);
    }
};
</script>

<style lang="scss"></style>
