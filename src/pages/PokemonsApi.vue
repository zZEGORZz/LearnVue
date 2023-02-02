<template>
    <div>
        <h1>Pokemons</h1>
        <input
            type="text"
            placeholder="Введите имя покемона"
            @keypress.enter="getPoke"
            v-model="inputValue"
        />
        <input type="button" value="Найти" @click="getPoke" />
        <div class="imgPoke" v-if="this.$store.state.infoPokemons">
            <img
                :src="this.$store.state.infoPokemons.data.sprites.front_default"
                alt="Картинка не загрузилась"
            />
            <img
                :src="this.$store.state.infoPokemons.data.sprites.back_default"
                alt="Картинка не загрузилась"
            />
        </div>
        <ul class="ulPoke">
            <li v-if="this.$store.state.infoPokemons">
                name: {{ this.$store.state.infoPokemons.data.forms[0].name }}
            </li>
            <li v-if="this.$store.state.infoPokemons">
                weight: {{ this.$store.state.infoPokemons.data.weight }}
            </li>
            <li v-if="this.$store.state.infoPokemons">
                is hidden:
                {{
                    is_hidden(
                        this.$store.state.infoPokemons.data.abilities[0]
                            .is_hidden
                    )
                }}
            </li>
            <li v-if="this.$store.state.infoPokemons">
                stats:
                {{ this.$store.state.infoPokemons.data.stats[0].base_stat }}
            </li>
            <li v-if="this.$store.state.infoPokemons">
                effort:
                {{ this.$store.state.infoPokemons.data.stats[0].effort }}
            </li>
        </ul>
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
        getPoke() {
            console.log(`this is poke ` + this.inputValue);
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${this.inputValue}`)
                .then((response) => {
                    this.$store.state.infoPokemons = response;
                });
        },
        is_hidden(hid) {
            if (hid === true) return 'yes';
            else return 'no';
        },
    },
};
</script>

<style>
.ulPoke li {
    padding: 0%;
    background-color: rgb(67, 238, 224);
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
</style>