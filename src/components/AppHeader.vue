<script>
import AppSearchBar from './AppSearchBar.vue';
export default {
  components: { AppSearchBar },
  methods: {
    onSubmitTerm(searchTerm) {
      this.$emit('submit-movie-search', searchTerm)
    }
  },
  emits: ['submit-movie-search']
}
</script>




<template>
  <AppSearchBar @submit-search-term="onSubmitTerm" />
</template>





<style></style>