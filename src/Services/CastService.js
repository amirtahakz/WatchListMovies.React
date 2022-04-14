import axios from "axios";

const API_KEY = '16d9cee9ebd27d83a92eb4ef14b45c8c';


export const CastService = {
    GetPopularCasts: async (page) => {
      return await axios
        .get(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        .catch((error) => console.log(error));
    },
    GetCastDetailsById: async (id) => {
      return await axios
        .get(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`)
        .catch((error) => console.log(error));
    },
    GetCastsOfMovieById: async (id) => {
      return await axios
        .get(`http://api.themoviedb.org/3/movie/${id}/casts?api_key=${API_KEY}`)
        .catch((error) => console.log(error));
    },
    GetCastsOfSerialById: async (id) => {
      return await axios
        .get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`)
        .catch((error) => console.log(error));
    },
    SearchCastsByName: async (query) => {
      return await axios
        .get(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=en-US&query=${query}`)
        .catch((error) => console.log(error));
    },
    GetImagesOfCast: async (id) => {
      return await axios
        .get(`https://api.themoviedb.org/3/person/${id}/images?api_key=${API_KEY}&language=en-US`)
        .catch((error) => console.log(error));
    },
  };
  