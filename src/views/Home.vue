<template>
  <div class="body">
    <div v-if="loading" class="loading-container">
      <p>Carregando filmes...</p>
    </div>
    <div v-else-if="error" class="error-container">
      <p>{{ error }}</p>
    </div>
    <div v-else>
    <section class="container">
      <h2 class="title">
        <router-link to="/action">Ação</router-link>
      </h2>
      <ul class="cards">
        <li v-for="(movie, index) in getMoviesByGenre('action')" :key="index">
          <router-link :to="`/movie/${movie.id}`">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </router-link>
        </li>
      </ul>
    </section>
    <section class="container">
      <h2>
        <router-link to="/adventure">Aventura</router-link>
      </h2>
      <ul class="cards">
        <li v-for="(movie, index) in getMoviesByGenre('adventure')" :key="index">
          <router-link :to="`/movie/${movie.id}`">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </router-link>
        </li>
      </ul>
    </section>
    <section class="container">
      <h2>
        <router-link to="/comedy">Comédia</router-link>
      </h2>
      <ul class="cards">
        <li v-for="(movie, index) in getMoviesByGenre('comedy')" :key="index">
          <router-link :to="`/movie/${movie.id}`">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </router-link>
        </li>
      </ul>
    </section>
    <section class="container">
      <h2>
        <router-link to="romantic-comedy">Comédia Romântica</router-link>
      </h2>
      <ul class="cards">
        <li v-for="(movie, index) in getMoviesByGenre('romantic-comedy')" :key="index">
          <router-link :to="`/movie/${movie.id}`">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </router-link>
        </li>
      </ul>
    </section>
    <section class="container">
      <h2>
        <router-link to="/drama">Drama</router-link>
      </h2>
      <ul class="cards">
        <li v-for="(movie, index) in getMoviesByGenre('drama')" :key="index">
          <router-link :to="`/movie/${movie.id}`">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </router-link>
        </li>
      </ul>
    </section>
    <section class="container">
      <h2>
        <router-link to="/fantasy">Fantasia</router-link>
      </h2>
      <ul class="cards">
        <li v-for="(movie, index) in getMoviesByGenre('fantasy')" :key="index">
          <router-link :to="`/movie/${movie.id}`">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </router-link>
        </li>
      </ul>
    </section>
    <section class="container">
      <h2>
        <router-link to="/sci-fi">Ficção Científica</router-link>
      </h2>
      <ul class="cards">
        <li v-for="(movie, index) in getMoviesByGenre('sci-fi')" :key="index">
          <router-link :to="`/movie/${movie.id}`">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </router-link>
        </li>
      </ul>
    </section>
    <section class="container">
      <h2>
        <router-link to="/musical">Musical</router-link>
      </h2>
      <ul class="cards">
        <li v-for="(movie, index) in getMoviesByGenre('musical')" :key="index">
          <router-link :to="`/movie/${movie.id}`">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </router-link>
        </li>
      </ul>
    </section>
    <section class="container">
      <h2>
        <router-link to="/romance">Romance</router-link>
      </h2>
      <ul class="cards">
        <li v-for="(movie, index) in getMoviesByGenre('romance')" :key="index">
          <router-link :to="`/movie/${movie.id}`">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </router-link>
        </li>
      </ul>
    </section>
    <section class="container">
      <h2>
        <router-link to="horror">Terror</router-link>
      </h2>
      <ul class="cards">
        <li v-for="(movie, index) in getMoviesByGenre('horror')" :key="index">
          <router-link :to="`/movie/${movie.id}`">
            <img class="image" :src="movie.imageURL" :alt="movie.name">
          </router-link>
        </li>
      </ul>
    </section>
    </div>
  </div>
</template>

<script>
import movieService from '../services/movie.service';

export default {
  name: "Home",
  data() {
    return {
      movies: [],
      screenSize: 'large',
      loading: true,
      error: null,
    };
  },
  async created() {
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
    
    // Carregar filmes do OMDB
    try {
      this.movies = await movieService.loadAllMovies();
      this.loading = false;
    } catch (error) {
      this.error = 'Erro ao carregar filmes. Por favor, tente novamente.';
      this.loading = false;
      console.error(error);
    }
  },
  methods: {
    getMoviesByGenre(genre) {
      const filteredByGenre = this.movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
      
      // Sempre mostrar 15 filmes na home
      return filteredByGenre.slice(0, 15);
    },
    updateScreenSize() {
      if (window.innerWidth < 514) {
        this.screenSize = 'mobile';
      } else if (window.innerWidth >= 514 && window.innerWidth <= 767) {
        this.screenSize = 'extra extra small';
      } else if (window.innerWidth > 767 && window.innerWidth <= 992) {
        this.screenSize = 'extra small';
      } else if (window.innerWidth > 992 && window.innerWidth <= 1199) {
        this.screenSize = 'small';
      } else if (window.innerWidth > 1199 && window.innerWidth <= 1399) {
        this.screenSize = 'medium';
      } else if (window.innerWidth > 1399) {
        this.screenSize = 'large';
      }
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.updateScreenSize);
  }
};
</script>
