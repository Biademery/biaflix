<template>
  <div class="movie-details">
    <div v-if="loading" class="loading-container">
      <p>Carregando detalhes do filme...</p>
    </div>
    
    <div v-else-if="error" class="error-container">
      <p>{{ error }}</p>
      <button @click="$router.go(-1)" class="back-button">Voltar</button>
    </div>
    
    <div v-else-if="movie" class="details-content">
      <button @click="$router.go(-1)" class="back-button">← Voltar</button>
      
      <div class="details-grid">
        <!-- Poster -->
        <div class="poster-section">
          <img :src="movie.imageURL" :alt="movie.name" class="movie-poster">
        </div>
        
        <!-- Informações -->
        <div class="info-section">
          <h1 class="movie-title">{{ movie.name }}</h1>
          
          <div class="movie-meta">
            <span v-if="movie.year" class="meta-item">{{ movie.year }}</span>
            <span v-if="movie.rated" class="meta-item">{{ movie.rated }}</span>
            <span v-if="movie.runtime" class="meta-item">{{ movie.runtime }}</span>
            <span v-if="movie.genre" class="meta-item genre-badge">{{ formatGenre(movie.genre) }}</span>
          </div>
          
          <!-- Ratings -->
          <div v-if="movie.imdbRating" class="ratings">
            <div class="rating-item">
              <span class="rating-label">IMDb</span>
              <span class="rating-value">⭐ {{ movie.imdbRating }}/10</span>
              <span v-if="movie.imdbVotes" class="rating-votes">({{ movie.imdbVotes }} votos)</span>
            </div>
            <div v-if="movie.metascore && movie.metascore !== 'N/A'" class="rating-item">
              <span class="rating-label">Metascore</span>
              <span class="rating-value">{{ movie.metascore }}/100</span>
            </div>
          </div>
          
          <!-- Avaliações adicionais -->
          <div v-if="movie.ratings && movie.ratings.length > 0" class="additional-ratings">
            <div v-for="(rating, index) in movie.ratings" :key="index" class="rating-source">
              <span class="source-name">{{ rating.Source }}</span>
              <span class="source-value">{{ rating.Value }}</span>
            </div>
          </div>
          
          <!-- Sinopse -->
          <div v-if="movie.plot" class="plot-section">
            <h3>Sinopse</h3>
            <p>{{ movie.plot }}</p>
          </div>
          
          <!-- Detalhes -->
          <div class="details-list">
            <div v-if="movie.director && movie.director !== 'N/A'" class="detail-item">
              <strong>Diretor:</strong> {{ movie.director }}
            </div>
            <div v-if="movie.writer && movie.writer !== 'N/A'" class="detail-item">
              <strong>Roteirista:</strong> {{ movie.writer }}
            </div>
            <div v-if="movie.actors && movie.actors !== 'N/A'" class="detail-item">
              <strong>Elenco:</strong> {{ movie.actors }}
            </div>
            <div v-if="movie.language && movie.language !== 'N/A'" class="detail-item">
              <strong>Idioma:</strong> {{ movie.language }}
            </div>
            <div v-if="movie.country && movie.country !== 'N/A'" class="detail-item">
              <strong>País:</strong> {{ movie.country }}
            </div>
            <div v-if="movie.released && movie.released !== 'N/A'" class="detail-item">
              <strong>Lançamento:</strong> {{ movie.released }}
            </div>
            <div v-if="movie.boxOffice && movie.boxOffice !== 'N/A'" class="detail-item">
              <strong>Bilheteria:</strong> {{ movie.boxOffice }}
            </div>
            <div v-if="movie.awards && movie.awards !== 'N/A'" class="detail-item">
              <strong>Prêmios:</strong> {{ movie.awards }}
            </div>
          </div>
          
          <!-- Link externo -->
          <div class="external-links">
            <a :href="`https://www.imdb.com/title/${movie.imdbID}`" target="_blank" class="imdb-link">
              Ver no IMDb →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movieService from '../services/movie.service';

export default {
  name: "MovieDetails",
  data() {
    return {
      movie: null,
      loading: true,
      error: null,
    };
  },
  async created() {
    const movieId = this.$route.params.id;
    
    try {
      // Primeiro tenta buscar do cache
      let movie = movieService.getMovieById(movieId);
      
      if (!movie) {
        // Se não encontrar no cache, carrega todos os filmes
        await movieService.loadAllMovies();
        movie = movieService.getMovieById(movieId);
      }
      
      if (movie) {
        this.movie = movie;
      } else {
        this.error = 'Filme não encontrado.';
      }
      
      this.loading = false;
    } catch (error) {
      this.error = 'Erro ao carregar detalhes do filme.';
      this.loading = false;
      console.error(error);
    }
  },
  methods: {
    formatGenre(genre) {
      const genreMap = {
        'action': 'Ação',
        'adventure': 'Aventura',
        'comedy': 'Comédia',
        'romantic-comedy': 'Comédia Romântica',
        'drama': 'Drama',
        'fantasy': 'Fantasia',
        'horror': 'Terror',
        'musical': 'Musical',
        'romance': 'Romance',
        'sci-fi': 'Ficção Científica'
      };
      return genreMap[genre] || genre;
    }
  }
};
</script>

<style scoped>
.movie-details {
  min-height: 100vh;
  padding: 2rem;
  background-color: #eee;
  color: #212121;
}

.loading-container,
.error-container {
  text-align: center;
  padding: 4rem 2rem;
  font-size: 1.2rem;
}

.back-button {
  background: #fff;
  border: 2px solid #ddd;
  color: #212121;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.back-button:hover {
  background: #f5f5f5;
  border-color: #ccc;
  transform: translateX(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.details-content {
  max-width: 1400px;
  margin: 0 auto;
}

.details-grid {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

@media (max-width: 992px) {
  .details-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.poster-section {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

.movie-poster {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  background: #fff;
}

.movie-poster:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.movie-title {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
  color: #212121;
}

.movie-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 1.1rem;
}

.meta-item {
  padding: 0.5rem 1rem;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.genre-badge {
  background: #d45e5e;
  color: #fff;
  border: none;
  font-weight: 600;
}

.ratings {
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.rating-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.rating-label {
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.rating-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #d45e5e;
}

.rating-votes {
  font-size: 0.85rem;
  color: #888;
}

.additional-ratings {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.rating-source {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.source-name {
  font-size: 0.85rem;
  color: #666;
}

.source-value {
  font-weight: 600;
  color: #d45e5e;
}

.plot-section {
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.plot-section h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #d45e5e;
}

.plot-section p {
  line-height: 1.8;
  font-size: 1.1rem;
  margin: 0;
  color: #444;
}

.details-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-item {
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  border-left: 3px solid #d45e5e;
  line-height: 1.6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.detail-item strong {
  color: #d45e5e;
  margin-right: 0.5rem;
}

.external-links {
  margin-top: 2rem;
}

.imdb-link {
  display: inline-block;
  padding: 1rem 2rem;
  background: #d45e5e;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(212, 94, 94, 0.3);
}

.imdb-link:hover {
  background: #c04e4e;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(212, 94, 94, 0.4);
}
</style>
