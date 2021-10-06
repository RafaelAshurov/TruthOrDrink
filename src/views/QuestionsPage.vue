<template>
    <div
        class="question-page text-center site-card"
        v-if="myQuestions[counter]"
        :class="{ 'site-card-collapse': collapsed }"
    >
        <!-- Modal -->
        <b-modal v-model="modalShow" hide-footer>
            <div class="d-block text-center p-2">
                Are you sure you want to start a new game?
            </div>
            <div class="d-flex justify-content-center pt-3">
                <button @click="startNewGame()" type="button" class="btn btn-ok">
                    Yes I'm
                </button>
            </div>
        </b-modal>

        <span class="questions-count">
            {{ `( ${counter + 1} / ${myQuestions.length} )` }}
        </span>
        <div class="question-container">
            <div class="question-wrapper"
                 :class="{ 'question-collapse':  questionCollapse }"
                 :style="{ 'border-color': categoryColor }">
                <div class="category-wrapper" :style="{ 'background-color': categoryColor }">
                    {{ myQuestions[counter].category }}
                </div>
                <p class="question" :style="{ color: categoryColor }">
                    {{ myQuestions[counter][`en`] }}
                </p>
                <div class="btn-container d-flex justify-content-between">
                    <button
                        @click="prevQuestion(false)"
                        type="button"
                        class="btn"
                        :disabled="itsTheFirstQuestion"
                        :style="{
                'border-color': categoryColor,
                color: categoryColor
            }"
                    >
                        Prev question
                    </button>
                    <button
                        @click="nextQuestion(false)"
                        type="button"
                        class="btn"
                        :disabled="itsTheLastQuestion"
                        :style="{
                'border-color': categoryColor,
                color: categoryColor
            }"
                    >
                        Skip question
                    </button>
                </div>
            </div>
        </div>
        <div class="player-names-container"
             :class="{'collapse': collapsePlayerNames}">
            <p id="player-names-wrapper"
               :style="{
                    'border-color': categoryColor,
                     color: categoryColor,
                     'inline-size': namesWrapperInlineSize,
                    }">
                <span class="player-name mr-2">{{ playerWhoAsking }}</span>
                asking
                <span class="player-name ml-2">{{ playerWhoAnswering }}</span>
            </p>
        </div>
        <div>
            <button
                @click="nextQuestion(true)"
                type="button"
                class="btn btn-bg next-round-btn"
                :style="{
                    'border-color': categoryColor,
                    'background-color': categoryColor,
            }">

                Next Round
            </button>
        </div>
        <button @click="showModal()" type="button" class="btn btn-bg capital-font new-game-btn">
            new game
        </button>
    </div>
</template>

<script>
import { QuestionList } from "../helpers/questionsList";

export default {
    name: "questionsPage",
    props: {
        selectedCategories: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            categories: [],
            myQuestions: [],
            players: [],
            playerWhoAsking: "",
            playerWhoAnswering: "",
            counter: 0,
            namesWrapperInlineSize: 'auto',
            itsTheLastQuestion: false,
            itsTheFirstQuestion: false,
            collapsed: true,
            questionCollapse: false,
            modalShow: false,
            collapsePlayerNames: false
        };
    },
    computed: {
        categoryColor: function() {
            switch (this.myQuestions[this.counter].category) {
                case "chill":
                    return "#ecca4e";
                    break;
                case "dirty":
                    return "#ec4e70";
                    break;
                case "intimate":
                    return "#4e70ec";
                    break;
                default:
                    return "#000000";
                    break;
            }
        }
    },
    methods: {
        closeModal() {
            this.modalShow = false;
        },
        showModal() {
            this.modalShow = true;
        },
        startNewGame() {
            this.modalShow = false;
            this.collapsed = true;
            setTimeout(() => {
                window.localStorage.clear();
                this.$router.push("/");
            }, 400);
        },
        nextQuestion(changePlayer = false) {
            if (changePlayer) this.randomizePlayers();
            this.changeQuestion('next', changePlayer);
        },
        prevQuestion(changePlayer = false) {
            if (changePlayer) this.randomizePlayers();
            this.changeQuestion('prev', changePlayer);
        },
        changeQuestion(direction, changePlayers) {
            const timeout = (changePlayers)? 1200 : 400;
            if (this. questionCollapse === false) {
                this. questionCollapse = true;
                setTimeout(() => {
                    if (direction === 'next') {
                        this.counter++;
                    } else if (direction === 'prev') {
                        this.counter--;
                    }
                    window.localStorage.setItem("counter", this.counter);
                    this.checkBtnsStatus();
                    this. questionCollapse = false;
                }, timeout);
            }
        },
        randomizePlayers(itsAnewGame = false) {
            // Its here for the animation of the players names, without it it's looks horrible
            if (this.namesWrapperInlineSize === 'auto' && !itsAnewGame) {
                this.namesWrapperInlineSize = document.getElementById('player-names-wrapper').offsetWidth + "px";
            }
            // Collapse player names div
            this.collapsePlayerNames = true;
            setTimeout(() => {
                let players = [...this.players];
                this.playerWhoAsking = players.splice(Math.floor(Math.random() * players.length), 1)[0].name;
                this.playerWhoAnswering = players[Math.floor(Math.random() * players.length), 1].name;
                //Show player names div
                this.collapsePlayerNames = false;
            }, 400);

        },
        checkBtnsStatus() {
            this.itsTheFirstQuestion = this.counter === 0 ? true : false;
            this.itsTheLastQuestion = this.counter + 1 === this.myQuestions.length ? true : false;
        },
        // Why its so hard to shuffle arrays!!!?!??!?!
        shuffle(array) {
            let currentIndex = array.length,
                temporaryValue,
                randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
    },
    mounted: function() {
        this.checkBtnsStatus();
        this.collapsed = false;
    },
    created: function() {
        //Collapse the site card
        this.collapsed = true;

        // Get saved questions and players from prev games
        let localQuestionList = JSON.parse(window.localStorage.getItem("questions"));
        this.players = JSON.parse(window.localStorage.getItem("players"));

        // Start new game if there is no saved questions list\categories\players.
        if (!this.selectedCategories && localQuestionList && localQuestionList.length === 0 && this.players.length === 0)
            this.$router.push("/");

        this.randomizePlayers(true);

        if (this.selectedCategories) {
            this.categories = JSON.parse(this.selectedCategories);

            //Get only the questions that match our selected categories
            let relevantQuestions = QuestionList.filter(question => {
                return this.categories.includes(question.category);
            });
            //Shuffle the questions
            this.myQuestions = this.shuffle(relevantQuestions);

            //Save the new list to local storage
            window.localStorage.setItem("questions", JSON.stringify(this.myQuestions));
        } else if (localQuestionList && localQuestionList.length > 0) {
            // Get prev counter
            let counter = window.localStorage.getItem("counter");
            if (counter) this.counter = Number(counter);

            this.myQuestions = localQuestionList;
        }
    }
};
</script>

<style lang="scss">
.modal-content,
.modal-body {
    color: #000000 !important;
}

.question-page.site-card {
    max-height: 700px;

    * {
        transition: all 0.4s ease-in;
    }

    .questions-count {
        margin-bottom: 10px;
        display: inline-block;
    }

    .question-container {
        height: 300px;
        margin-bottom: 20px;

        .question-wrapper {
            transition: all 0.4s ease-in;
            font-size: 20px;
            max-height: 300px;
            height: 300px;
            border-bottom: 3px solid;
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .category-wrapper {
                color: #ffffff;
                border-radius: 10px;
                padding-top: 3px;
            }

            p.question {
                padding: 20px 10px 0px;
            }
        }
        .question-wrapper.question-collapse {
            max-height: 22px;
            border-bottom: 19px solid;
        }

    }

    .player-names-container {
        transition: all 0.4s ease-in;
        background-color: #273446;
        margin: 20px auto 40px;
        width: 80%;
        padding: 8px;
        border-radius: 10px;
        overflow: hidden;

        p#player-names-wrapper {
            padding: 0;
            margin: 0;
            overflow: hidden;
            height: 24px;

            span.player-name {
                color: #ffffff;
                opacity: 0.8;
            }
        }
    }

    .player-names-container.collapse {
        display: block;
        width: 0;
        p#player-names-wrapper {
            margin: 0 0 0 10px;
        }
    }

    .btn-container {
        button {
            background-color: transparent;
            color: #12c298;
            border: 1px solid #12c298;
            font-size: 14px;
            padding: 5px 10px;
            margin-bottom: 20px;
        }
    }

    .new-game-btn {
        background-color: transparent;
        color: #ffffff;
        border: 1px solid #ffffff;
        margin-top: 40px;
        opacity: 0.8;
    }
    .next-round-btn {
        color: #ffffff;
        margin: 0 auto;
    }

}

.question-page.site-card.site-card-collapse {
    max-height: 0px;
}
</style>
