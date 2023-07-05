<script>
import { store } from '../data/store'
export default {
  data() {
    return store
  }
}
</script>



<template>
  <h2 class="text-center mt-5 mb-4">Movies List</h2>
  <ul class="w-25 mx-auto mt-2">
    <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
  </ul>
</template>




<style></style>