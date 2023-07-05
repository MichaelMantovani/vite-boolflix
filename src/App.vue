<script>
import axios from 'axios';
import { baseUri, apiKey } from './data/index'
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return store
  },
  methods: {
    fetchFilteredMovies(searchTerm) {
      axios.get(`${baseUri}/search/movie?api_key=${apiKey}&query=${searchTerm}`)
        .then(res => this.movies = res.data.results)
        .catch(err => console.error(err))
    }
  },
  components: { AppHeader, AppMain },
}
</script>



<template>
  <AppHeader @submit-movie-search="fetchFilteredMovies" />
  <AppMain />
</template>




<style></style>


