<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-transparent border-bottom">
      <div class="container-fluid">
        <router-link to="/">
          <a class="navbar-brand">
            <img src="./assets/images/biaflix.png" class="img" alt="Logo Biaflix" />
          </a>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/series" class="nav-link">Séries</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/filmes" class="nav-link">Filmes</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" style="color: #212121"
                data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/action" class="dropdown-item">Ação</router-link>
                </li>
                <li>
                  <router-link to="/adventure" class="dropdown-item">Aventura</router-link>
                </li>
                <li>
                  <router-link to="/comedy" class="dropdown-item">Comédia</router-link>
                </li>
                <li>
                  <router-link to="/romantic-comedy" class="dropdown-item">Comédia Romântica</router-link>
                </li>
                <li>
                  <router-link to="/drama" class="dropdown-item">Drama</router-link>
                </li>
                <li>
                  <router-link to="/fantasy" class="dropdown-item">Fantasia</router-link>
                </li>
                <li>
                  <router-link to="/sci-fi" class="dropdown-item">Ficção Científica</router-link>
                </li>
                <li>
                  <router-link to="/musical" class="dropdown-item">Musical</router-link>
                </li>
                <li>
                  <router-link to="/romance" class="dropdown-item">Romance</router-link>
                </li>
                <li>
                  <router-link to="/horror" class="dropdown-item">Terror</router-link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <router-link to="/all" class="dropdown-item">Todos</router-link>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search" @submit.prevent="searchMovies">
            <input class="form-control me-2 bg-transparent" type="search" placeholder="Buscar" aria-label="Buscar"
              v-model="searchQuery" />
          </form>
        </div>
      </div>
    </nav>

    <section class="body">
      <div v-if="searchResults.length > 0" class="container">
        <h2>Resultados da Busca</h2>
        <ul class="cards">
          <li v-for="movie in searchResults" :key="movie.id">
            <a :href="movie.movieURL" target="_blank">
              <img class="image" :src="movie.imageURL" :alt="movie.name">
            </a>
          </li>
        </ul>
        <div class="body">
          <section class="container">
            <h2>Outras opções</h2>
            <div class="cards">
              <li v-for="(movie, index) in movies" :key="index">
                <div>
                  <a :href="movie.movieURL" target="_blank">
                    <img class="image" :src="movie.imageURL" :alt="movie.name">
                  </a>
                </div>
              </li>
            </div>
          </section>
        </div>
      </div>
      <div v-else-if="searchQuery && searchResults.length === 0">
        <h3>"{{ searchQuery }}" não encontrado</h3>
        <div class="body">
          <section class="container">
            <h2>Outras opções</h2>
            <div class="cards">
              <li v-for="(movie, index) in movies" :key="index">
                <div>
                  <a :href="movie.movieURL" target="_blank">
                    <img class="image" :src="movie.imageURL" :alt="movie.name">
                  </a>
                </div>
              </li>
            </div>
          </section>
        </div>
      </div>
      <router-view v-if="!searchQuery" />

    </section>

    <footer class=" footer">
      <div class="logo">
        <a href="#">
          <img src="./assets/images/biaflix.png" class="img" alt="Logo Biaflix" />
        </a>
      </div>
      <div class="icons">
        <img src="./assets/icons/github.svg" alt="Ícone do Github" />
        <img src="./assets/icons/instagram.svg" alt="Ícone do Instagram" />
        <img src="./assets/icons/linkedin.svg" alt="Ícone do LinkedIn" />
      </div>
      <div class="text">Copyright © 2024</div>
    </footer>
  </div>
</template>

<script>
import list from './data/data.json'
export default {
  name: "App",
  data() {
    return {
      movies: list.movies,
      searchQuery: '',
      searchResults: []
    };
  },
  methods: {
    searchMovies() {
      if (this.searchQuery) {
        this.searchResults = this.movies.filter(movie =>
          movie.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.searchResults = [];
      }
    }
  },
  watch: {
    searchQuery() {
      this.searchMovies();
    }
  }
};


</script>

<style scoped>
.navbar {
  padding: 10px 30px;
}

.nav-link {
  color: #212121;
}

.img {
  width: 100%;
  max-width: 60px;
  margin-bottom: 25px;
}

.footer {
  text-align: center;
  padding: 30px;
  background-color: #6c757dd8;
  box-shadow: 0 -10px 20px rgba(108, 117, 125, 0.847);
  position: relative;
}

.icons {
  padding-bottom: 20px;
}

.icons img {
  margin: 5px;
}
</style>
