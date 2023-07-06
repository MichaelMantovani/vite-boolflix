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
  <ul class="w-25 mx-auto my-5">
    <li>{{ movie.title }}</li>
    <li>{{ movie.originalTitle }}</li>
    <li class="w-25"><img class="img-fluid" :src="getImagePath(movie.language)" src="../assets/img/" alt=""></li>
    <li>{{ movie.vote }}</li>
  </ul>
</template>



<style scoped>
li {
  margin: 10px 0;
}
</style>