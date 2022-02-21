import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { apiTMDB, apiTrakt } from "../../services/api";
import { MovieDTO } from "../../dtos/MovieDTO";

const { API_KEY_TMDB } = process.env;

export const selectButton = (selected: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.BUTTON_SELECTION, data: selected });
  };
};

export const get_trendings_movies_ids = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await apiTrakt.get("/trending");
    const ids = response.data.map((item) => {
      return item.movie.ids.tmdb;
    });
    dispatch({ type: ActionType.GET_TRENDING_MOVIES_IDS, data: ids });
  };
};

export const get_popular_movies_ids = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await apiTrakt.get("/popular");

    const ids = response.data.map((item) => {
      return item.ids.tmdb;
    });
    dispatch({ type: ActionType.GET_POPULAR_MOVIES_IDS, data: ids });
  };
};

export const get_recommended_movies_ids = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await apiTrakt.get("/recommended");

    const ids = response.data.map((item) => {
      return item.movie.ids.tmdb;
    });

    dispatch({
      type: ActionType.GET_RECOMMENDED_MOVIES_IDS,
      data: ids,
    });
  };
};

export const get_recommended_movies_data = (moviesIds: number[]) => {
  return async (dispatch: Dispatch<Action>) => {
    const moviesArray: MovieDTO[] = [];

    const getData = moviesIds.map(async (movieId) => {
      const response = await apiTMDB.get(`/${movieId}?api_key=${API_KEY_TMDB}`);

      moviesArray.push({
        id: response.data.id,
        title: response.data.title,
        status: response.data.status,
        imdb_id: response.data.imdb_id,
        overview: response.data.overview,
        homepage: response.data.homepage,
        genres: response.data.genres,
        vote_count: response.data.vote_count,
        popularity: response.data.popularity,
        poster_path: response.data.poster_path,
        release_date: response.data.release_date,
        vote_average: response.data.vote_average,
        backdrop_path: response.data.backdrop_path,
        original_title: response.data.original_title,
      });
    });

    Promise.all(getData).then((res) => {
      dispatch({
        type: ActionType.GET_RECOMMENDED_MOVIES_DATA,
        data: moviesArray,
      });
    });
  };
};

export const get_popular_movies_data = (moviesIds: number[]) => {
  return async (dispatch: Dispatch<Action>) => {
    const moviesArray: MovieDTO[] = [];

    const getData = moviesIds.map(async (movieId) => {
      const response = await apiTMDB.get(`/${movieId}?api_key=${API_KEY_TMDB}`);

      moviesArray.push({
        id: response.data.id,
        title: response.data.title,
        status: response.data.status,
        imdb_id: response.data.imdb_id,
        overview: response.data.overview,
        homepage: response.data.homepage,
        genres: response.data.genres,
        vote_count: response.data.vote_count,
        popularity: response.data.popularity,
        poster_path: response.data.poster_path,
        release_date: response.data.release_date,
        vote_average: response.data.vote_average,
        backdrop_path: response.data.backdrop_path,
        original_title: response.data.original_title,
      });
    });

    Promise.all(getData).then((res) => {
      dispatch({
        type: ActionType.GET_POPULAR_MOVIES_DATA,
        data: moviesArray,
      });
    });
  };
};

export const get_trending_movies_data = (moviesIds: number[]) => {
  return async (dispatch: Dispatch<Action>) => {
    const moviesArray: MovieDTO[] = [];

    const getData = moviesIds.map(async (movieId) => {
      const response = await apiTMDB.get(`/${movieId}?api_key=${API_KEY_TMDB}`);

      moviesArray.push({
        id: response.data.id,
        title: response.data.title,
        status: response.data.status,
        imdb_id: response.data.imdb_id,
        overview: response.data.overview,
        homepage: response.data.homepage,
        genres: response.data.genres,
        vote_count: response.data.vote_count,
        popularity: response.data.popularity,
        poster_path: response.data.poster_path,
        release_date: response.data.release_date,
        vote_average: response.data.vote_average,
        backdrop_path: response.data.backdrop_path,
        original_title: response.data.original_title,
      });
    });

    Promise.all(getData).then((res) => {
      dispatch({
        type: ActionType.GET_TRENDING_MOVIES_DATA,
        data: moviesArray,
      });
    });
  };
};
