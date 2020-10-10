import Vue from "vue";
import Router from "vue-router";
import StartGame from "./views/StartGame.vue";
import CategorySelect from "./views/CategorySelect.vue";
import QuestionsPage from "./views/QuestionsPage.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "startGame",
            component: StartGame
        },
        {
            path: "/chose-your-categories",
            name: "categories",
            component: CategorySelect
        },
        {
            path: "/drink-up",
            name: "questionsPage",
            component: QuestionsPage,
            props: true
        }
    ]
});
