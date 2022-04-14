import axios from "axios";


const API_KEY = '16d9cee9ebd27d83a92eb4ef14b45c8c';

export const MovieService = {
    GetActionMovies: async () => {
      return await axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&page=1`)
        .catch((error) => console.log(error));
    },
    GetHorrorMovies: async () => {
      return await axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&page=1`)
        .catch((error) => console.log(error));
    },
    GetRomanceMovies: async () => {
      return await axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749&page=1`)
        .catch((error) => console.log(error));
    },
    GetAnimationMovies: async() => {
      return await axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&page=1`)
        .catch((error) => console.log(error));
    },
    GetUpcomingMovies: async () => {
      return await axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        .catch((error) => console.log(error));
    },
    GetPopularMovies: async () => {
      return await axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .catch((error) => console.log(error));
    },
    GetMovieDetailsById: async (id) => {
      return await axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .catch((error) => console.log(error));
    },
    GetMovieRecommendationsById: async (id) => {
      return await axios
        .get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`)
        .catch((error) => console.log(error));
    },
    GetTopRatedMovies: async (page) => {
      return await axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
        .catch((error) => console.log(error));
    },
    SearchMoviesByName: async (query) => {
      return await axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
        .catch((error) => console.log(error));
    },
    GetMoviesOfCastById: async (id) => {
      return await axios
        .get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}`)
        .catch((error) => console.log(error));
    },
  };