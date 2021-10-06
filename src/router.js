import Vue from "vue";
import Router from "vue-router";
import StartGame from "./views/StartGame.vue";
import CategorySelect from "./views/CategorySelect.vue";
import QuestionsPage from "./views/QuestionsPage.vue";
import AddPlayers from "./views/AddPlayers";

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "startGame",
            component: StartGame
        },
        {
            path: "/add-players",
            name: "AddPlayers",
            component: AddPlayers
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
