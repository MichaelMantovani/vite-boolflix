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
  <ul class="w-25 mx-auto mt-5">
    <li class="my-5" v-for="movie in   movies  " :key="movie.id">{{ movie.title }}:
      <MovieCard :movie="movie" />
    </li>
  </ul>
</template>




<style></style>