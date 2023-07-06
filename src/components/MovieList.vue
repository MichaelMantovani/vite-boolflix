<script>
import { store } from '../data/store'
import MovieCard from './MovieCard.vue';
export default {
  data() {
    return store
  },
  components: { MovieCard }
}
</script>



<template>
  <MovieCard v-if="movies.length" :movie="movie" v-for="movie in movies" />
</template>




<style></style>