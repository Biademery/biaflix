<template>
    <div class="body">
        <h2>Romance</h2>
        <div class="cards">
            <li v-for="(movie, index) in movies" :key="index">
                <div>
                    <a :href="movie.movieURL" target="_blank">
                        <img class="image" :src="movie.imageURL" :alt="movie.name">
                    </a>
                </div>
            </li>
        </div>
    </div>
</template>
  
<script>
import list from '../data/data.json'
export default {
  name: "All",
  data() {
    return {
      movies: list.movies,
    };
  },
};
</script>