<template>
    <h1>Pokemons</h1>
    {{ info }}
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            info: null,
        }
    },
    mounted() {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((response) => (this.info = response))
    },
}
</script>
