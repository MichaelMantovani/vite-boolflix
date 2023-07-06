<script>
import { languageAvailable } from '../data/index'
export default {
  data() {
    return { languageAvailable }
  },

  methods: {
    getImagePath(img) {
      return new URL(`../assets/img/${img}.png`, import.meta.url).href;
    }
  },
  computed: {
    hasIcon() {
      return this.languageAvailable.includes(this.item.language)
    }
  },
  props: {
    item: Object
  }
}
</script>

<template>
  <ul class="w-25 mx-auto my-5">
    <li>{{ item.title }}</li>
    <li>{{ item.originalTitle }}</li>
    <li class="w-25">
      <img v-if="hasIcon" class="img-fluid" :src="getImagePath(item.language)" :alt="item.language">
      <span v-else>{{ item.language }}</span>
    </li>
    <li>{{ item.vote }}</li>
  </ul>
</template>



<style scoped>
li {
  margin: 10px 0;
}
</style>