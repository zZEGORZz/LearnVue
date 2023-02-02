import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router/routerPage';

const app = createApp(App).use(router);
app.use(router);

const store = createStore({
    state() {
        return {
            infoPokemons: '',
            getPokemon: '',
            listTasksVuex: [],
        };
    },
});

createApp(App).use(router).use(store).mount('#app');
