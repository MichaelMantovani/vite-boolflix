<script>
export default {
  methods: {
    getImagePath(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    }
  },
  props: {
    movie: Object
  }
}
</script>

<template>
  <ul>
    <li>{{ movie.title }}</li>
    <li>{{ movie.originalTitle }}</li>
    <li><img :src="getImagePath(movie.language)" src="../assets/img/" alt=""></li>
    <li>{{ movie.vote }}</li>
  </ul>
</template>



<style scoped>
img {
  width: 20px;
}
</style>