<template>
  <div class="body">
    <section class="container">
      <h2>Ação</h2>
      <ul class="cards">
        <li v-for="(movie, index) in movies" :key="index">
          <div v-if="movie.genre == 'action'">
            <a :href="movie.movieURL" target="_blank">
              <img class="image" :src="movie.imageURL" :alt="movie.name">
            </a>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import list from '../data/data.json'
export default {
  name: "Action",
  data() {
    return {
      movies: list.movies,
    };
  },
};
</script>
