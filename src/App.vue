<script>
import axios from 'axios';
import { baseUri, apiKey } from './data/index'
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return store
  },
  methods: {
    fetchFilteredProductions(searchTerm, endpoint, target) {
      axios.get(`${baseUri}/${endpoint}?api_key=${apiKey}&query=${searchTerm}`)
        .then(res => {
          const productions = res.data.results
          store[target] = productions.map((production) => {
            const { title, original_title, original_language, vote_average } = production
            return { title: title || name, originalTitle: original_title || original_name, language: original_language, vote: Math.ceil(vote_average) }
          })
        })
        .catch(err => console.error(err))
    },
  },
  components: { AppHeader, AppMain },
}
</script>



<template>
  <AppHeader @submit-movie-search="fetchFilteredProductions" />
  <AppMain />
</template>




<style></style>


