<template>
    <div class="body">
        <h2>Musical</h2>
        <div class="cards">
            <li v-for="(movie, index) in movies" :key="index">
                <div v-if="movie.genre == 'musical'">
                    <a :href="movie.movieURL" target="_blank">
                        <img class="image" :src="movie.imageURL" :alt="movie.name">
                    </a>
                </div>
            </li>
        </div>
    </div>
</template>
  
<script>
import http from '../http-common.js';

class MovieDataService {
    getAll() {
        return http.get('/movie/');
    }
}
export default {
    name: "Musical",
    data() {
        return {
            movies: [],
        };
    },
    methods: {
        addMovies() {
            const movieDataService = new MovieDataService
            movieDataService
                .getAll()
                .then((response) => {
                    this.movies = response.data;
                    console.log(response.data)
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.addMovies();
    },
};
</script>
  