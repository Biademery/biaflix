<template>
  <div>
    <h2>
      <router-link to="/action">Ação</router-link>
    </h2>
    <div class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('action')" :key="index">
        <a :href="movie.movieURL" target="_blank">
          <img class="image" :src="movie.imageURL" :alt="movie.name">
        </a>
      </li>
    </div>
    <h2>
      <router-link to="/adventure">Aventura</router-link>
    </h2>
    <div class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('adventure')" :key="index">
        <a :href="movie.movieURL" target="_blank">
          <img class="image" :src="movie.imageURL" :alt="movie.name">
        </a>
      </li>
    </div>
    <h2>
      <router-link to="/comedy">Comédia</router-link>
    </h2>
    <div class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('comedy')" :key="index">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </a>
      </li>
    </div>
    <h2>
      <router-link to="romantic-comedy">Comédia Romântica</router-link>
    </h2>
    <div class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('romantic-comedy')" :key="index">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </a>
      </li>
    </div>
    <h2>
      <router-link to="/drama">Drama</router-link>
    </h2>
    <div class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('drama')" :key="index">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </a>
      </li>
    </div>
    <h2>
      <router-link to="/fantasy">Fantasia</router-link>
    </h2>
    <div class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('fantasy')" :key="index">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </a>
      </li>
    </div>
    <h2>
      <router-link to="/sci-fi">Ficção Científica</router-link>
    </h2>
    <div class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('sci-fi')" :key="index">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </a>
      </li>
    </div>
    <h2>
      <router-link to="/musical">Musical</router-link>
    </h2>
    <div class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('musical')" :key="index">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </a>
      </li>
    </div>
    <h2>
      <router-link to="/romance">Romance</router-link>
    </h2>
    <div class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('romance')" :key="index">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </a>
      </li>
    </div>
    <h2>
      <router-link to="horror">Terror</router-link>
    </h2>
    <div class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('horror')" :key="index">
          <a :href="movie.movieURL" target="_blank">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </a>
      </li>
    </div>
  </div>
</template>

<script>
import list from '../data/data.json'
export default {
  name: "Home",
  data() {
    return {
      movies: list.movies,
    };
  },
  methods: {
    getMoviesByGenre(genre) {
      const filteredByGenre = this.movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
      return filteredByGenre.slice(0, 6);
    },
  },
};
</script>
