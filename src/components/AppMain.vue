<script>
import ProductionsList from './ProductionsList.vue';
export default {
  components: { ProductionsList }
}
</script>



<template>
  <main class="container">
    <ProductionsList />
  </main>
</template>




<style scoped lang="scss">
main {
  height: calc(100% - 100px);
  overflow: auto;
}
</style>