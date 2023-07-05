<script>
export default {
  props: {
    movie: Object
  }
}
</script>

<template>
  <ul>
    <li v-for="(info, key) in movie">{{ key }}: {{ info }}</li>
  </ul>
</template>



<style></style>