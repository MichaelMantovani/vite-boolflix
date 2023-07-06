<script>
import axios from 'axios';
import { baseUri, apiKey, endpoint } from './data/index'
import { store } from './data/store'
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
    renderImage(target) {
      return target ? `${baseUri.poster}${target}` : 'No image available'
    },
    fetchFilteredProductions(endpoint, target) {
      axios.get(`${baseUri.production}/${endpoint}?api_key=${apiKey}&query=${this.store.searchTerm}`)
        .then(res => {


          const productions = res.data.results;




          this.store[target] = productions.map((production) => {
            const { title, name, original_name, original_title, original_language, vote_average, poster_path } = production
            return {
              title: title || name,
              image: this.renderImage(poster_path),
              originalTitle: original_title || original_name,
              language: original_language,
              vote: Math.ceil(vote_average)
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
    @submit-movie-search="fetchFilteredProductions(endpoint.movies, 'movies'); fetchFilteredProductions(endpoint.series, 'series');" />
  <AppMain />
</template>




<style></style>


