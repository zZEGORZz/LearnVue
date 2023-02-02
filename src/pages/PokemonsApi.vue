<template>
    <div>
        <h1>Pokemons</h1>
        <input
            v-if="!this.$store.state.infoPokemons"
            id="butFind"
            type="button"
            value="FIND POKEMONS!"
            @click="getPokesList"
        />
        <div v-on:="getPokesList"></div>
        <div class="block-left">
            <ul class="ulPoke" v-if="this.$store.state.infoPokemons">
                <!-- prettier-ignore -->
                <li v-for="(elem, indexElem) in this.$store.state.infoPokemons.data.results" :key="indexElem.id">
                <button v-on:click="getPoke(elem.url)">{{ elem.name }}</button>
            </li>
            </ul>
        </div>
        <div class="block-right">
            <div class="sticky">
                <div class="imgPoke" v-if="this.$store.state.getPokemon">
                    <img
                        :src="
                            this.$store.state.getPokemon.data.sprites
                                .front_default
                        "
                        alt="Картинка не загрузилась"
                    />
                    <img
                        :src="
                            this.$store.state.getPokemon.data.sprites
                                .back_default
                        "
                        alt="Картинка не загрузилась"
                    />
                </div>

                <ul class="ulPoke">
                    <li v-if="this.$store.state.getPokemon">
                        name:
                        {{ this.$store.state.getPokemon.data.forms[0].name }}
                    </li>
                    <li v-if="this.$store.state.getPokemon">
                        weight: {{ this.$store.state.getPokemon.data.weight }}
                    </li>
                    <li v-if="this.$store.state.getPokemon">
                        ability:
                        <!-- prettier-ignore -->
                        {{ this.$store.state.getPokemon.data.abilities[0].ability.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            inputValue: '',
        };
    },
    methods: {
        getPokesList() {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/?limit=721`)
                .then((response) => {
                    this.$store.state.infoPokemons = response;
                });
        },
        getPoke(pokeName) {
            axios.get(pokeName).then((response) => {
                this.$store.state.getPokemon = response;
            });
        },
    },
};
</script>

<style>
.ulPoke li {
    padding: 0%;
    background-color: rgb(255 241 241);
    font-size: 25px;
}

.imgPoke {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0%;
}

.imgPoke img {
    widows: 300px;
    height: 101px;
}

#butFind {
    font-size: 25px;
    border: 1 rem solid;
    margin-top: 200px;
    border-color: black;
    font-weight: 700;
}

.block-left {
    width: 50%;
    height: 100%;
    overflow: auto;
    float: left;
}

.sticky {
    position: fixed;
    top: 25%;
}

.block-right {
    width: 50%;
    height: 100%;
    overflow: auto;
}
</style>