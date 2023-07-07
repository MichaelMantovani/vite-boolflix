<script>
export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    onSubmitTerm() {
      if (this.searchTerm.length)
        this.$emit('submit-search');
    }
  },
  emits: ['submit-search', 'change-term']
}
</script>



<template>
  <form @submit.prevent="onSubmitTerm">
    <div class="mb-3 input-group w-25 mx-auto mt-3">
      <input type="text" class="form-control rounded" placeholder="Cerca.." @keyup="$emit('change-term', searchTerm)"
        v-model.trim="searchTerm">
      <button type="submit" class="btn btn-primary ms-2 rounded">Cerca</button>
    </div>
  </form>
</template>




<style></style>