<script>
import { languageAvailable } from '../data/index'
export default {
  data() {
    return { languageAvailable }
  },

  methods: {
    getImagePath(img) {
      return new URL(`../assets/img/${img}.png`, import.meta.url).href;
    }
  },
  computed: {
    hasIcon() {
      return this.languageAvailable.includes(this.movie.language)
    }
  },
  props: {
    movie: Object
  }
}
</script>

<template>
  <ul class="w-25 mx-auto my-5">
    <li>{{ movie.title }}</li>
    <li>{{ movie.originalTitle }}</li>
    <li class="w-25">
      <img v-if="hasIcon" class="img-fluid" :src="getImagePath(movie.language)" :alt="movie.language">
      <span v-else>{{ movie.language }}</span>
    </li>
    <li>{{ movie.vote }}</li>
  </ul>
</template>



<style scoped>
li {
  margin: 10px 0;
}
</style>