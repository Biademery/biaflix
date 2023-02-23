<template>
  <div>
    <h2>
      <router-link to="/action">Ação</router-link>
    </h2>
    <div class="cards-home">
      <li v-for="(movie, index) in movies" :key="index">
        <div v-if="movie.genre == 'action'">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" alt="">
          </a>
        </div>
      </li>
    </div>
    <h2>
      <router-link to="/adventure">Aventura</router-link>
    </h2>
    <div class="cards-home">
      <li v-for="(movie, index) in movies" :key="index">
        <div v-if="movie.genre == 'adventure'">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" alt="">
          </a>
        </div>
      </li>
    </div>
    <h2>
      <router-link to="/comedy">Comédia</router-link>
    </h2>
    <div class="cards-home">
      <li v-for="(movie, index) in movies" :key="index">
        <div v-if="movie.genre == 'comedy'">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" alt="">
          </a>
        </div>
      </li>
    </div>
    <h2>
      <router-link to="romantic-comedy">Comédia Romântica</router-link>
    </h2>
    <div class="cards-home">
      <li v-for="(movie, index) in movies" :key="index">
        <div v-if="movie.genre == 'romantic-comedy'">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" alt="">
          </a>
        </div>
      </li>
    </div>
    <h2>
      <router-link to="/drama">Drama</router-link>
    </h2>
    <div class="cards-home">
      <li v-for="(movie, index) in movies" :key="index">
        <div v-if="movie.genre == 'drama'">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" alt="">
          </a>
        </div>
      </li>
    </div>
    <h2>
      <router-link to="/fantasy">Fantasia</router-link>
    </h2>
    <div class="cards-home">
      <li v-for="(movie, index) in movies" :key="index">
        <div v-if="movie.genre == 'fantasy'">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" alt="">
          </a>
        </div>
      </li>
    </div>
    <h2>
      <router-link to="/sci-fi">Ficção Científica</router-link>
    </h2>
    <div class="cards-home">
      <li v-for="(movie, index) in movies" :key="index">
        <div v-if="movie.genre == 'sci-fi'">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" alt="">
          </a>
        </div>
      </li>
    </div>
    <h2>
      <router-link to="/musical">Musical</router-link>
    </h2>
    <div class="cards-home">
      <li v-for="(movie, index) in movies" :key="index">
        <div v-if="movie.genre == 'musical'">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" alt="">
          </a>
        </div>
      </li>
    </div>
    <h2>
      <router-link to="/romance">Romance</router-link>
    </h2>
    <div class="cards-home">
      <li v-for="(movie, index) in movies" :key="index">
        <div v-if="movie.genre == 'romance'">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </a>
        </div>
      </li>
    </div>
    <h2>
      <router-link to="horror">Terror</router-link>
    </h2>
    <div class="cards-home">
      <li v-for="(movie, index) in movies" :key="index">
        <div v-if="movie.genre == 'horror'">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </a>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import http from '../http-common.js';

class MovieDataService {
  getAll() {
    return http.get('/movie/');
  }
}
export default {
  name: "Home",
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    addMovies() {
      const movieDataService = new MovieDataService
      movieDataService
        .getAll()
        .then((response) => {
          this.movies = response.data;
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.addMovies();
  },
}
</script>
