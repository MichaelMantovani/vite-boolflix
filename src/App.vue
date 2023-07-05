<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppHeader },
}
</script>



<template>
  <AppHeader @submit-search-term="filteredMovies" />
</template>




<style></style>