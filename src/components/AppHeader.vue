<script>
import { store } from '../data/store'
import SearchBar from './SearchBar.vue';
export default {
  components: { SearchBar },
  emits: ['submit-filter'],
  methods: {
    setSearchFilter(searchTerm) {
      store.filterTitle = searchTerm
    }
  },
}
</script>



<template>
  <SearchBar @submit-search="$emit('submit-filter')" @change-term="setSearchFilter" />
</template>





<style></style>