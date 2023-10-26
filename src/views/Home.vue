<template>
  <div class="body">
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
    <ul class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('adventure')" :key="index">
        <a :href="movie.movieURL" target="_blank">
          <img class="image" :src="movie.imageURL" :alt="movie.name">
        </a>
      </li>
    </ul>
    <h2>
      <router-link to="/comedy">Comédia</router-link>
    </h2>
    <ul class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('comedy')" :key="index">
        <a :href="movie.movieURL" target="_blank">
          <img class="image" :src="movie.imageURL" :alt="movie.name">
        </a>
      </li>
    </ul>
    <h2>
      <router-link to="romantic-comedy">Comédia Romântica</router-link>
    </h2>
    <ul class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('romantic-comedy')" :key="index">
        <a :href="movie.movieURL" target="_blank">
          <img class="image" :src="movie.imageURL" :alt="movie.name">
        </a>
      </li>
    </ul>
    <h2>
      <router-link to="/drama">Drama</router-link>
    </h2>
    <ul class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('drama')" :key="index">
        <a :href="movie.movieURL" target="_blank">
          <img class="image" :src="movie.imageURL" :alt="movie.name">
        </a>
      </li>
    </ul>
    <h2>
      <router-link to="/fantasy">Fantasia</router-link>
    </h2>
    <ul class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('fantasy')" :key="index">
        <a :href="movie.movieURL" target="_blank">
          <img class="image" :src="movie.imageURL" :alt="movie.name">
        </a>
      </li>
    </ul>
    <h2>
      <router-link to="/sci-fi">Ficção Científica</router-link>
    </h2>
    <ul class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('sci-fi')" :key="index">
        <a :href="movie.movieURL" target="_blank">
          <img class="image" :src="movie.imageURL" :alt="movie.name">
        </a>
      </li>
    </ul>
    <h2>
      <router-link to="/musical">Musical</router-link>
    </h2>
    <ul class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('musical')" :key="index">
        <a :href="movie.movieURL" target="_blank">
          <img class="image" :src="movie.imageURL" :alt="movie.name">
        </a>
      </li>
    </ul>
    <h2>
      <router-link to="/romance">Romance</router-link>
    </h2>
    <ul class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('romance')" :key="index">
        <a :href="movie.movieURL" target="_blank">
          <img class="image" :src="movie.imageURL" :alt="movie.name">
        </a>
      </li>
    </ul>
    <h2>
      <router-link to="horror">Terror</router-link>
    </h2>
    <ul class="cards">
      <li v-for="(movie, index) in getMoviesByGenre('horror')" :key="index">
        <a :href="movie.movieURL" target="_blank">
          <img class="image" :src="movie.imageURL" :alt="movie.name">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import list from '../data/data.json';

export default {
  name: "Home",
  data() {
    return {
      movies: list.movies,
      screenSize: 'large',
    };
  },
  methods: {
    getMoviesByGenre(genre) {
      const filteredByGenre = this.movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());

      let numberOfMoviesToShow;
      switch (this.screenSize) {
        case 'mobile':
          numberOfMoviesToShow = 1;
          break;
        case 'extra extra small':
          numberOfMoviesToShow = 2;
          break;
        case 'extra small':
          numberOfMoviesToShow = 3;
          break;
        case 'small':
          numberOfMoviesToShow = 4;
          break;
        case 'medium':
          numberOfMoviesToShow = 5;
          break;
        case 'large':
          numberOfMoviesToShow = 6;
          break;
        case 'extra large':
          numberOfMoviesToShow = 7;
          break;
        case 'extra extra large':
          numberOfMoviesToShow = 8;
          break;
        default:
          numberOfMoviesToShow = 6;
          break;
      }

      return filteredByGenre.slice(0, numberOfMoviesToShow);
    },
    updateScreenSize() {
      if (window.innerWidth < 448) {
        this.screenSize = 'mobile';
      } else if (window.innerWidth >= 448 && window.innerWidth < 672) {
        this.screenSize = 'extra extra small';
      } else if (window.innerWidth >= 672 && window.innerWidth < 894) {
        this.screenSize = 'extra small';
      } else if (window.innerWidth >= 894 && window.innerWidth < 1117) {
        this.screenSize = 'small';
      } else if (window.innerWidth >= 1117 && window.innerWidth < 1341) {
        this.screenSize = 'medium';
      } else if (window.innerWidth >= 1341 && window.innerWidth < 1564) {
        this.screenSize = 'large';
      } else if (window.innerWidth >= 1564 && window.innerWidth < 1787) {
        this.screenSize = 'extra large';
      } else {
        this.screenSize = 'extra extra large';
      }
    }
  },
  created() {
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
  },
  destroyed() {
    window.removeEventListener('resize', this.updateScreenSize);
  }
};
</script>
