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
  <div class="col py-4">
    <div class="card border-0 bg-transparent">
      <div id="poster">
        <img class="img-fluid rounded d-block" v-if="hasPoster" :src="item.image" :alt="item.title">
        <span v-else>{{ item.image }}</span>
      </div>
      <div class="card-info d-none">
        <ul>
          <li>{{ item.title }}</li>
          <li>{{ item.originalTitle }}</li>
          <li class="w-25">
            <img v-if="hasIcon" class="img-fluid" :src="getImagePath(item.language)" :alt="item.language">
            <span v-else>{{ item.language }}</span>
          </li>
          <li>
            <font-awesome-icon :icon="[setStarvote(n), 'star']" v-for="n in 5" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
#poster {
  width: 100%;
}



li {
  margin: 10px 0;
}
</style>