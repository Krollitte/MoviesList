import axios from "axios";

const { TRAKT_API_KEY } = process.env;

const apiTrakt = axios.create({
  baseURL: "https://api.trakt.tv/movies/",
  headers: {
    "trakt-api-version": 2,
    "trakt-api-key": ` ${TRAKT_API_KEY}`,
    "Content-Type": "application/json",
  },
});

const apiTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: {
    "Content-Type": "application/json",
  },
});

export { apiTrakt, apiTMDB };
