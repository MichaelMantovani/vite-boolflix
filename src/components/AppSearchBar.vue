<script>
import { store } from '../data/store'
export default {
  data() {
    return store

  },
  methods: {
    onSubmitTerm(searchTerm) {
      if (this.searchTerm.length)
        this.$emit('submit-search-term', searchTerm);
    }
  },
  emits: ['submit-search-term']
}
</script>



<template>
  <form @submit.prevent="onSubmitTerm(searchTerm)">
    <div class="mb-3 input-group w-25 mx-auto mt-3">
      <input type="text" class="form-control rounded" placeholder="Cerca.." v-model.trim="searchTerm">
      <button type="submit" class="btn btn-primary ms-2 rounded">Cerca</button>
    </div>
  </form>
</template>




<style></style>