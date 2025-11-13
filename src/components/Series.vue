<template>
  <div class="body">
    <div v-if="loading" class="loading-container">
      <p>Carregando séries...</p>
    </div>
    <div v-else-if="error" class="error-container">
      <p>{{ error }}</p>
    </div>
    <section v-else class="container">
      <h2>Séries</h2>
      <div class="cards">
        <li v-for="(movie, index) in movies" :key="index">
          <div v-if="movie.type == 'tv-show'">
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
  name: "Series",
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
      this.movies = allMovies.filter(movie => movie.type === 'tv-show');
      this.loading = false;
    } catch (error) {
      this.error = 'Erro ao carregar séries. Por favor, tente novamente.';
      this.loading = false;
      console.error(error);
    }
  },
};
</script>