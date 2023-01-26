import { createRouter, createWebHashHistory } from 'vue-router';
import MainPaigeRout from '../pages/MainPaigeRout.vue';
import PokemonsApi from '../pages/PokemonsApi.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/todo', component: MainPaigeRout },
    { path: '/poke', component: PokemonsApi },
  ],
});
