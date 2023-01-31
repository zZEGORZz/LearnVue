<template>
    <h1>Pokemons</h1>
    <input
        type="text"
        placeholder="Введите имя покемона"
        @keypress.enter="getPoke"
        v-model="inputValue"
    />
    <input type="button" value="Найти" @click="getPoke" />
    <ul>
        <li v-if="info">
            <img
                :src="info.data.sprites.front_default"
                alt="Картинка не загрузилась ыыы"
            />
        </li>
        <li>pokemon name: {{ inputValue }}</li>
        <li v-if="info">pokemon species: {{ info.data.species.name }}</li>
    </ul>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            info: 0,
            inputValue: '',
        };
    },
    methods: {
        getPoke() {
            console.log(`this is poke ` + this.inputValue);
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${this.inputValue}`)
                .then((response) => {
                    this.info = response;
                });
        },
    },
};
</script>
