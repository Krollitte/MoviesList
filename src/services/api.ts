import axios from "axios";

const apiTrakt = axios.create({
  baseURL: "https://api.trakt.tv/movies/",
  headers: {
    "trakt-api-version": 2,
    "trakt-api-key":
      "3d90761e6386e39ac03f5f1599f748bf793ad1b6aac9c1417cb6ad809c10b561",
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
