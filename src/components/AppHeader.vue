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
  <header>
    <div class="container h-100 d-flex align-items-center justify-content-between">
      <div id="logo" class="text-danger">Bollfix</div>
      <div>
        <SearchBar id="search-bar" @submit-search="$emit('submit-filter')" @change-term="setSearchFilter" />
      </div>
    </div>
  </header>
</template>





<style scoped lang="scss">
@use '../assets/scss/vars' as *;

header {
  height: 100px;
  background-color: $primary-color;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 1;
}

#logo {
  font-size: 4rem;
}

#search-bar {
  width: 250px;
}
</style>