import axios from 'axios';

const API_KEY = 'ec9617f9';
const BASE_URL = 'https://www.omdbapi.com/';

class OMDBService {
  // Buscar filme por título
  async searchByTitle(title) {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          t: title,
          plot: 'full'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar filme:', error);
      throw error;
    }
  }

  // Buscar filme por ID do IMDB
  async searchById(imdbId) {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          i: imdbId,
          plot: 'full'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar filme por ID:', error);
      throw error;
    }
  }

  // Buscar múltiplos filmes por título (retorna lista)
  async searchMovies(searchTerm, page = 1) {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          s: searchTerm,
          page: page
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      throw error;
    }
  }

  // Buscar múltiplos filmes por IDs
  async getMoviesByIds(imdbIds) {
    try {
      const promises = imdbIds.map(id => this.searchById(id));
      const results = await Promise.all(promises);
      return results.filter(movie => movie.Response === 'True');
    } catch (error) {
      console.error('Erro ao buscar múltiplos filmes:', error);
      throw error;
    }
  }

  // Mapear dados do OMDB para o formato da aplicação
  mapToAppFormat(omdbMovie) {
    if (omdbMovie.Response === 'False') {
      return null;
    }

    return {
      id: omdbMovie.imdbID,
      name: omdbMovie.Title,
      imageURL: omdbMovie.Poster !== 'N/A' ? omdbMovie.Poster : 'https://via.placeholder.com/300x450?text=No+Image',
      movieURL: `https://www.imdb.com/title/${omdbMovie.imdbID}`,
      genre: this.mapGenre(omdbMovie.Genre),
      type: omdbMovie.Type === 'series' ? 'tv-show' : 'movie',
      year: omdbMovie.Year,
      rated: omdbMovie.Rated,
      released: omdbMovie.Released,
      runtime: omdbMovie.Runtime,
      director: omdbMovie.Director,
      writer: omdbMovie.Writer,
      actors: omdbMovie.Actors,
      plot: omdbMovie.Plot,
      language: omdbMovie.Language,
      country: omdbMovie.Country,
      awards: omdbMovie.Awards,
      ratings: omdbMovie.Ratings,
      metascore: omdbMovie.Metascore,
      imdbRating: omdbMovie.imdbRating,
      imdbVotes: omdbMovie.imdbVotes,
      imdbID: omdbMovie.imdbID,
      boxOffice: omdbMovie.BoxOffice
    };
  }

  // Mapear gêneros do OMDB para os gêneros da aplicação
  mapGenre(genreString) {
    if (!genreString || genreString === 'N/A') return 'action';
    
    const genres = genreString.toLowerCase();
    
    // Priorizar gêneros mais específicos primeiro
    if (genres.includes('fantasy')) return 'fantasy';
    if (genres.includes('sci-fi') || genres.includes('science fiction')) return 'sci-fi';
    if (genres.includes('horror') || genres.includes('thriller')) return 'horror';
    if (genres.includes('musical') || genres.includes('music')) return 'musical';
    if (genres.includes('comedy') && genres.includes('romance')) return 'romantic-comedy';
    if (genres.includes('romance')) return 'romance';
    if (genres.includes('adventure')) return 'adventure';
    if (genres.includes('comedy')) return 'comedy';
    if (genres.includes('drama')) return 'drama';
    if (genres.includes('action')) return 'action';
    
    return 'action'; // default
  }
}

export default new OMDBService();
