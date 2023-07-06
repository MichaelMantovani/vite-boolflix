const baseUri = {
  production :'https://api.themoviedb.org/3',
  poster: 'https://image.tmdb.org/t/p/w342',
}
const apiKey = '85b4061722c282a492d446d05895f72a'
const endpoint = {
  movies: 'search/movie',
  series: 'search/tv'
};
const languageAvailable = ['en', 'it']



export {baseUri, apiKey, languageAvailable, endpoint}