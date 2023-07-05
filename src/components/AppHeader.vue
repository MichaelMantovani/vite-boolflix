<script>
import AppSearchBar from './AppSearchBar.vue';
export default {
  components: { AppSearchBar },
  methods: {
    onSubmitTerm() {
      this.$emit('submit-search-term')
    }
  }
}
</script>




<template>
  <AppSearchBar @submit-search-term="onSubmitTerm" />
</template>





<style></style>