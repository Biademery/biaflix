<template>
  <div class="body">
    <div v-if="loading" class="loading-container">
      <p>Carregando filmes...</p>
    </div>
    <div v-else-if="error" class="error-container">
      <p>{{ error }}</p>
    </div>
    <section v-else class="container">
      <h2>Ficção Científica</h2>
      <div class="cards">
        <li v-for="(movie, index) in movies" :key="index">
          <div v-if="movie.genre == 'sci-fi'">
            <router-link :to="`/movie/${movie.id}`">
              <img class="image" :src="movie.imageURL" :alt="movie.name">
            </router-link>
          </div>
        </li>
      </div>
    </section>
  </div>
</template>

<script>
import movieService from '../services/movie.service';

export default {
  name: "SciFi",
  data() {
    return {
      movies: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      const allMovies = await movieService.loadAllMovies();
      this.movies = allMovies.filter(movie => movie.genre === 'sci-fi');
      this.loading = false;
    } catch (error) {
      this.error = 'Erro ao carregar filmes. Por favor, tente novamente.';
      this.loading = false;
      console.error(error);
    }
  },
};
</script>