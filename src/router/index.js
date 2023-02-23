import { createRouter, createWebHistory } from 'vue-router';

import Action from '../components/Action.vue';
import Adventure from '../components/Adventure.vue';
import All from '../components/All.vue';
import Comedy from '../components/Comedy.vue';
import Drama from '../components/Drama.vue';
import Fantasy from '../components/Fantasy.vue';
import Filmes from '../components/Filmes.vue';
import Horror from '../components/Horror.vue';
import Musical from '../components/Musical.vue';
import Romance from '../components/Romance.vue';
import RomanticComedy from '../components/RomanticComedy.vue';
import SciFi from '../components/Sci-Fi.vue';
import Series from '../components/Series.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/action',
    name: 'Action',
    component: Action,
  },
  {
    path: '/all',
    name: 'All',
    component: All,
  },
  {
    path: '/adventure',
    name: 'Adventure',
    component: Adventure,
  },
  {
    path: '/comedy',
    name: 'Comedy',
    component: Comedy,
  },
  {
    path: '/drama',
    name: 'Drama',
    component: Drama,
  },
  {
    path: '/fantasy',
    name: 'Fantasy',
    component: Fantasy,
  },
  {
    path: '/filmes',
    name: 'Filmes',
    component: Filmes,
  },
  {
    path: '/horror',
    name: 'Horror',
    component: Horror,
  },
  {
    path: '/musical',
    name: 'Musical',
    component: Musical,
  },
  {
    path: '/romance',
    name: 'Romance',
    component: Romance,
  },
  {
    path: '/romantic-comedy',
    name: 'RomanticComedy',
    component: RomanticComedy,
  },
  {
    path: '/sci-fi',
    name: 'Sci-Fi',
    component: SciFi,
  },
  {
    path: '/series',
    name: 'Series',
    component: Series,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
