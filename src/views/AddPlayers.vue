<template>
    <div class="add-players-page site-card" :class="{ 'site-card-collapse': collapsed }">
        <h1 class="capital-font">Add Players</h1>
        <p>Add the names of the people who are going to play</p>
        <div class="names-input-wrapper">
            <input type="text"
                   v-for="player in players"
                   :key="player.id"
                   class="form-control"
                   :class="{'show': player.show}"
                   :placeholder="player.name"
                   v-on:input="updatePlayerNames($event.target, player.id)"
            >
            <button @click="addNewPlayerName()" type="button" class="btn btn-outline-info">
                Add another player name
            </button>

        </div>
        <button @click="moveToCategories()" type="button" class="btn btn-bg">
            Add Players
        </button>
    </div>
</template>

<script>
export default {
    name: "AddPlayers",
    data() {
        return {
            collapsed: true,
            players: [{id: 0, name: 'Player 1', show: true}, {id: 1, name: 'Player 2', show: true}],
        };
    },
    created: function() {

    },
    computed: {},
    mounted: function() {
        this.collapsed = false;
    },
    methods: {
        moveToCategories() {
            this.collapsed = true;
            //Save players
            localStorage.setItem("players", JSON.stringify(this.players));

            setTimeout(() => this.$router.push("/chose-your-categories"), 400);
        },
        addNewPlayerName() {
            let playersList = this.players
            const newPlayerId = playersList[playersList.length - 1].id + 1;
            playersList.push({
                id: newPlayerId,
                name: `Player ${newPlayerId + 1}`,
                show: false
            });
            setTimeout(() => playersList[playersList.length - 1].show = true, 0);
        },
        updatePlayerNames(input, playerId) {
            input.value = this.capitalizeFirstLetter(input.value)
            this.players[playerId].name = input.value
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
};
</script>

<style lang="scss">
    .add-players-page.site-card {
        .names-input-wrapper {
            padding: 0 30px;
            input {
                margin: 14px auto;
                text-align: center;
                max-height: 0;
                padding: 0;
                 transition: all 0.2s ease;
                width: 86%;
            }
            input.show {
                max-height: 50px;
                padding: 6px 12px;
            }
            .btn-outline-info {
                color: #17a2b8;
                border-color: #17a2b8;
                background-color: transparent;
                padding: 6px 15px 0;
                margin: 0 0 30px;
                font-size: 17px;
            }

        }
    }
</style>