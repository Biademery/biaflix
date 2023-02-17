<template>
  <div class="section">
    <!-- <button class="myBtn" title="Go to top">Top</button> -->

    <div id="action" class="cards">
      <h2>
        <router-link to="/action">
          <a class="title">Ação</a>
        </router-link>
      </h2>
      <div class="action genre"></div>
    </div>
    <div id="adventure" class="cards">
      <h2>
        <router-link to="/adventure">
          <a class="title">Aventura</a>
        </router-link>
      </h2>
      <div class="adventure genre"></div>
    </div>
    <div id="comedy" class="cards">
      <h2>
        <router-link to="/comedy">
          <a class="title">Comédia</a>
        </router-link>
      </h2>
      <div class="comedy genre"></div>
    </div>
    <div id="romantic-comedy" class="cards">
      <h2>
        <router-link to="romantic-comedy">
          <a class="title">Comédia Romântica</a>
        </router-link>
      </h2>
      <div class="romantic-comedy genre"></div>
    </div>
    <div id="drama" class="cards">
      <h2>
        <router-link to="/drama">
          <a class="title">Drama</a>
        </router-link>
      </h2>
      <div class="drama genre"></div>
    </div>
    <div id="fantasy" class="cards">
      <h2>
        <router-link to="/fantasy">
          <a class="title">Fantasia</a>
        </router-link>
      </h2>
      <div class="fantasy genre"></div>
    </div>
    <div id="sci-fi" class="cards">
      <h2>
        <router-link to="/sci-fi">
          <a class="title">Ficção Científica</a>
        </router-link>
      </h2>
      <div class="sci-fi genre"></div>
    </div>
    <div id="musical" class="cards">
      <h2>
        <router-link to="/musical">
          <a class="title">Musical</a>
        </router-link>
      </h2>
      <div class="musical genre"></div>
    </div>
    <div id="romance" class="cards">
      <h2>
        <router-link to="/romance">
          <a class="title">Romance</a>
        </router-link>
      </h2>
      <div class="romance genre"></div>
    </div>
    <div id="horror" class="cards">
      <h2>
        <router-link to="horror">
          <a class="title">Suspense</a>
        </router-link>
      </h2>
      <div class="horror genre"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>