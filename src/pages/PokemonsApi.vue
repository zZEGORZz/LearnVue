<template>
    <div>
        <h1>Pokemons</h1>
        <div v-on:="getPokesList"></div>

        <input
            class="inpPoke"
            type="text"
            placeholder="Pokemon's Google"
            v-model="inputValue"
            @keypress.enter="
                getPoke(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            "
        />
        <input
            class="butPoke"
            type="button"
            value="search"
            @click="getPoke(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)"
        />

        <div class="sticky">
            <div class="imgPoke" v-if="this.$store.state.getPokemon">
                <img
                    :src="
                        this.$store.state.getPokemon.data.sprites.front_default
                    "
                    alt="Картинка не загрузилась"
                />
                <img
                    v-if="
                        this.$store.state.getPokemon.data.sprites.back_default
                    "
                    :src="
                        this.$store.state.getPokemon.data.sprites.back_default
                    "
                    alt="Картинка не загрузилась"
                />
            </div>

            <ul class="ulPokeStats">
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

        <ul class="ulPoke" v-if="this.$store.state.infoPokemons">
            <!-- prettier-ignore -->
            <li v-for="(elem, indexElem) in paginationPokes" :key="indexElem.id">
                <button class="btnChoosePoke" v-on:click="getPoke(elem.url)">{{ elem.name }}</button>
            </li>
        </ul>
    </div>
    <div></div>
    <div class="tablePagination">
        <div
            class="page"
            v-for="page in pages"
            :key="page"
            @click="pageClick(page)"
        >
            {{ page }}
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            inputValue: '',
            pageNum: 1,
        };
    },
    methods: {
        getPoke(pokeName) {
            console.log(pokeName);
            axios.get(pokeName).then((response) => {
                this.$store.state.getPokemon = response;
            });
            this.inputValue = '';
        },
        pageClick(page) {
            this.pageNum = page;
        },
    },
    computed: {
        getPokesList() {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/?limit=721`)
                .then((response) => {
                    this.$store.state.infoPokemons = response;
                });
        },
        pages() {
            return Math.ceil(
                this.$store.state.infoPokemons.data.results.length / 8
            );
        },
        paginationPokes() {
            let from = (this.pageNum - 1) * 8,
                to = from + 8;
            return this.$store.state.infoPokemons.data.results.slice(from, to);
        },
    },
    created: function () {
        this.getPoke('https://pokeapi.co/api/v2/pokemon/25/');
    },
};
</script>

<style>
.btnChoosePoke {
    font-size: 20px;
    margin: 0px;
    border-radius: 10px;
}

.btnChoosePoke:hover {
    background: #363636;
    color: #ffffff;
}

.ulPoke {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
}

.ulPoke li {
    padding: 0%;
    background-color: rgb(255 241 241);
    font-size: 25px;
    margin: 4px;
}

.ulPokeStats {
    display: flex;
    flex-direction: column;
    list-style-type: none;
}

.ulPokeStats li {
    padding: 0%;
    background-color: rgb(255 241 241);
    font-size: 25px;
    margin: 4px;
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

.tablePagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 10%;
    margin-right: 10%;
}

.page {
    border: solid 1px #363636;
    border-radius: 5px;
    width: 25px;
    margin: 2px;
}

.page:hover {
    background-color: #363636;
    cursor: pointer;
    color: #ffffff;
}

.inpPoke {
    border: black solid 2px;
    height: 30px;
    padding: 3px;
    margin: 0%;
}

.butPoke {
    margin-left: -2px;
    height: 30px;
    border: black solid 2px;
}
</style>