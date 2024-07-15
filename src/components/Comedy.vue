<template>
  <div class="body">
    <section class="container">
      <h2>Comédia</h2>
      <div class="cards">
        <li v-for="(movie, index) in movies" :key="index">
          <div v-if="movie.genre == 'comedy'">
            <a :href="movie.movieURL" target="_blank">
              <img class="image" :src="movie.imageURL" :alt="movie.name">
            </a>
          </div>
        </li>
      </div>
    </section>
  </div>
</template>

<script>
import list from '../data/data.json'
export default {
  name: "Comedy",
  data() {
    return {
      movies: list.movies,
    };
  },
};
</script>