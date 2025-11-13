import omdbService from './omdb.service';
import { movieIds, allMovieIds } from '../data/movie-ids';

class MovieService {
  constructor() {
    this.movies = [];
    this.loading = false;
    this.error = null;
  }

  // Carregar todos os filmes
  async loadAllMovies() {
    if (this.movies.length > 0) {
      return this.movies;
    }

    this.loading = true;
    this.error = null;

    try {
      // Criar mapa de ID para gênero correto
      const idToGenreMap = {};
      Object.keys(movieIds).forEach(genre => {
        movieIds[genre].forEach(id => {
          // Mapear nome da categoria para o gênero correto
          let mappedGenre = genre;
          if (genre === 'tvShows') mappedGenre = 'tv-show';
          else if (genre === 'romanticComedy') mappedGenre = 'romantic-comedy';
          else if (genre === 'sciFi') mappedGenre = 'sci-fi';
          
          idToGenreMap[id] = mappedGenre;
        });
      });
      
      // Remover duplicatas
      const uniqueIds = [...new Set(allMovieIds)];
      
      // Carregar filmes em lotes para não sobrecarregar a API
      const batchSize = 10;
      const batches = [];
      
      for (let i = 0; i < uniqueIds.length; i += batchSize) {
        batches.push(uniqueIds.slice(i, i + batchSize));
      }

      const allMovies = [];
      
      for (const batch of batches) {
        const batchResults = await omdbService.getMoviesByIds(batch);
        const mappedMovies = batchResults
          .map(movie => {
            const mappedMovie = omdbService.mapToAppFormat(movie);
            if (mappedMovie && idToGenreMap[mappedMovie.id]) {
              // Forçar o gênero correto baseado na lista
              mappedMovie.genre = idToGenreMap[mappedMovie.id];
            }
            return mappedMovie;
          })
          .filter(movie => movie !== null);
        allMovies.push(...mappedMovies);
      }

      this.movies = allMovies;
      this.loading = false;
      return this.movies;
    } catch (error) {
      this.error = error;
      this.loading = false;
      console.error('Erro ao carregar filmes:', error);
      throw error;
    }
  }

  // Obter filmes por gênero
  getMoviesByGenre(genre) {
    return this.movies.filter(movie => 
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  // Obter apenas filmes (não séries)
  getMoviesOnly() {
    return this.movies.filter(movie => movie.type === 'movie');
  }

  // Obter apenas séries
  getTVShowsOnly() {
    return this.movies.filter(movie => movie.type === 'tv-show');
  }

  // Buscar filme específico
  async searchMovie(title) {
    try {
      const result = await omdbService.searchByTitle(title);
      return omdbService.mapToAppFormat(result);
    } catch (error) {
      console.error('Erro ao buscar filme:', error);
      throw error;
    }
  }

  // Obter filme por ID
  getMovieById(id) {
    return this.movies.find(movie => movie.id === id || movie.imdbID === id);
  }

  // Limpar cache
  clearCache() {
    this.movies = [];
  }
}

export default new MovieService();
