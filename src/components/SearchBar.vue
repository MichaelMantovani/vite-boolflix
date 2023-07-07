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
    <div>
      <input type="text" class="rounded" placeholder="Cerca.." @keyup="$emit('change-term', searchTerm)"
        v-model.trim="searchTerm">
    </div>
  </form>
</template>




<style scoped lang="scss">
@use '../assets/scss/vars' as *;

input {
  background-color: $primary-color;
}

::placeholder {
  color: white;
}
</style>