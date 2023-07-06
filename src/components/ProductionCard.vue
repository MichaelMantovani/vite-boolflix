<script>
import { languageAvailable } from '../data/index'
export default {
  methods: {
    getImagePath(img) {
      return new URL(`../assets/img/${img}.png`, import.meta.url).href;
    },
  },
  computed: {
    hasIcon() {
      return languageAvailable.includes(this.item.language)
    },
    hasPoster() {
      return this.item.image !== 'No image available'
    }
  },
  props: {
    item: Object,
  },

}
</script>

<template>
  <ul class="w-25 mx-auto my-5">
    <li>
      <img v-if="hasPoster" :src="item.image" :alt="item.title">
      <span v-else>{{ item.image }}</span>
    </li>
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