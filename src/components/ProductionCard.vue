<script>
// Import dei dati
import { languageAvailable } from '../data/index'

export default {
  data() {
    return {
      posterVisible: true
    }
  },
  methods: {
    // Funzione per creare l'indirizzo assoluto dell'immagine
    getImagePath(img) {
      return new URL(`../assets/img/${img}.png`, import.meta.url).href;
    },
    setStarvote(n) {
      return n > this.item.vote ? 'far' : 'fas'
    },
    togglePosterVisible() {

      return this.posterVisible = !this.posterVisible
    }
  },
  computed: {
    // Funzione che controlla se esiste un immagine relativa alla lingua della produzione 
    hasIcon() {
      return languageAvailable.includes(this.item.language)
    },

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
        <img class="img-fluid rounded" v-show="posterVisible" :src="item.image" :alt="item.title"
          @mouseenter="togglePosterVisible">
      </div>
      <div class="card-info text-white" v-show="!posterVisible" @mouseleave="togglePosterVisible">
        <ul class="list-unstyled">
          <li><span>Titolo:</span> {{ item.title }}</li>
          <li><span>Titolo originale:</span> {{ item.originalTitle }}</li>
          <li class="w-25">
            Lingua:
            <img v-if="hasIcon" class="img-fluid" :src="getImagePath(item.language)" :alt="item.language">
            <span v-else>{{ item.language }}</span>
          </li>
          <li>
            <span>Voto:</span>
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
  height: 100%;
}

span {
  margin-right: 5px;
}



li {
  margin: 20px 0;
}
</style>