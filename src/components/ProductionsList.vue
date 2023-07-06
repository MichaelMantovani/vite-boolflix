<script>
import { store } from '../data/store'
import ProductionCard from './ProductionCard.vue';
export default {
  data() {
    return store
  },
  components: { ProductionCard }
}
</script>



<template>
  <div v-if="movies.length">
    <h2>Movies</h2>
    <ProductionCard :item="movie" v-for="movie in movies" />
  </div>
  <div v-if="series.length">
    <h2>TV Series</h2>
    <ProductionCard :item="serie" v-for="serie in series" />
  </div>
</template>




<style scoped>
h2 {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>