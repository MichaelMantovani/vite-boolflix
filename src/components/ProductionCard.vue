<script>
// Import dei dati
import { languageAvailable } from '../data/index'
import { voteMax } from '../data/index';

export default {
  methods: {
    // Funzione per creare l'indirizzo assoluto dell'immagine
    getImagePath(img) {
      return new URL(`../assets/img/${img}.png`, import.meta.url).href;
    },
    setStarvote(n) {
      return n > this.item.vote ? 'far' : 'fas'
    }
  },
  computed: {
    // Funzione che controlla se esiste un immagine relativa alla lingua della produzione 
    hasIcon() {
      return languageAvailable.includes(this.item.language)
    },

    // Funzione che controlla se è presente una locandina della produzione 
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
    <!-- Locandina  -->
    <li>
      <img v-if="hasPoster" :src="item.image" :alt="item.title">
      <span v-else>{{ item.image }}</span>
    </li>
    <!-- Titolo -->
    <li>{{ item.title }}</li>
    <!-- Titolo origibale -->
    <li>{{ item.originalTitle }}</li>
    <!-- Lingua  -->
    <li class="w-25">
      <img v-if="hasIcon" class="img-fluid" :src="getImagePath(item.language)" :alt="item.language">
      <span v-else>{{ item.language }}</span>
    </li>
    <!-- Media dei voti -->
    <li>
      <font-awesome-icon :icon="[setStarvote(n), 'star']" v-for="n in 5" />
    </li>
  </ul>
</template>



<style scoped>
li {
  margin: 10px 0;
}
</style>