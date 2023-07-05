<script>
export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    onSubmitTerm() {
      this.$emit('submit-search-term')
    }
  }
}
</script>



<template>
  <div class="input-group mb-3 w-25 mx-auto mt-2">
    <input type="text" class="form-control" placeholder="Cerca..." aria-describedby="button-addon2" v-model="searchTerm"
      @submit="onSubmitTerm">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cerca</button>
  </div>
</template>




<style></style>