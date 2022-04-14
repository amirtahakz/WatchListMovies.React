import axios from "axios";


const API_KEY = '16d9cee9ebd27d83a92eb4ef14b45c8c';

export const SerialService = {
    GetSeries: async () => {
      return await axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770&page=1`)
        .catch((error) => console.log(error));
    },
    GetTopRatedSeries: async (page) => {
      return await axios
        .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&page=${page}`)
        .catch((error) => console.log(error));
    },
    GetSerialDetailsById: async (id) => {
      return await axios
        .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`)
        .catch((error) => console.log(error));
    },
    GetSerialRecommendationsById: async (id) => {
      return await axios
        .get(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US`)
        .catch((error) => console.log(error));
    },
    SearchSeriesByName: async (query) => {
      return await axios
        .get(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${query}`)
        .catch((error) => console.log(error));
    },
  };