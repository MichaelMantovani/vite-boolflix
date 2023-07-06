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
  <ProductionCard v-if="movies.length" :item="movie" v-for="movie in movies" />
  <ProductionCard v-if="series.length" :item="serie" v-for="serie in series" />
</template>




<style></style>