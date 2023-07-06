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
        .then(res => {
          const movies = res.data.results
          store.movies = movies.map((movie) => {
            const { title, original_title, original_language, vote_average } = movie
            return { title, originalTitle: original_title, language: `${original_language}.png`, vote: Math.ceil(vote_average) }
          })
        })
        .catch(err => console.error(err))
    },
  },
  components: { AppHeader, AppMain },
}
</script>



<template>
  <AppHeader @submit-movie-search="fetchFilteredMovies" />
  <AppMain />
</template>




<style></style>


