<script>
import axios from 'axios';

// Import dei dati
import { baseUri, apiKey, endpoint } from './data/index'
import { store } from './data/store'

// Import dei component
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


export default {
  data() {
    return {
      store,
      endpoint
    }
  },
  methods: {
    // Funzione che crea un url della locandina del film, se questa esiste 
    setImage(target) {
      return target ? `${baseUri.poster}${target}` : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
    },

    setVote(vote) {
      return Math.ceil(vote / 2)
    },

    // Funzione di chiamata API sia per la lista dei film filtrati che per le serie TV 
    fetchFilteredProductions(endpoint, target) {

      // Effettuo la chiamata API
      axios.get(`${baseUri.production}/${endpoint}?api_key=${apiKey}&query=${this.store.filterTitle}`)
        .then(res => {
          const productions = res.data.results;

          // Estrapolo dall'intero risultato della chiamata solo i dati di cui ho bisgno e li inserisco nello store rinominandoli 
          this.store[target] = productions.map((production) => {
            const { title, name, original_name, original_title, original_language, vote_average, poster_path } = production
            return {
              title: title || name,
              image: this.setImage(poster_path),
              originalTitle: original_title || original_name,
              language: original_language,
              vote: this.setVote(vote_average)
            }
          })
        })
        .catch(err => console.error(err))
    },
  },
  components: { AppHeader, AppMain },
}
</script>



<template>
  <AppHeader
    @submit-filter="fetchFilteredProductions(endpoint.movies, 'movies'); fetchFilteredProductions(endpoint.series, 'series');" />
  <AppMain />
</template>




<style lang="scss">
@use './assets/scss/style.scss'
</style>


