import { MovieDTO } from "../../dtos/MovieDTO";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";

interface MovieInitialState {
  popular_movies_ids: number[];
  trendings_movies_ids: number[];
  recommended_movies_ids: number[];
  recommended_movies_array: MovieDTO[];
  trendings_movies_array: MovieDTO[];
  popular_movies_array: MovieDTO[];
}

const initialState: MovieInitialState = {
  popular_movies_ids: [],
  trendings_movies_ids: [],
  recommended_movies_ids: [],
  popular_movies_array: [],
  trendings_movies_array: [],
  recommended_movies_array: [],
};

export function MoviesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.GET_TRENDING_MOVIES_IDS: {
      return { ...state, trendings_movies_ids: action.data };
    }

    case ActionType.GET_POPULAR_MOVIES_IDS: {
      return { ...state, popular_movies_ids: action.data };
    }

    case ActionType.GET_RECOMMENDED_MOVIES_IDS: {
      return {
        ...state,
        recommended_movies_ids: action.data,
      };
    }

    case ActionType.GET_RECOMMENDED_MOVIES_DATA: {
      return {
        ...state,
        recommended_movies_array: action.data,
      };
    }
    case ActionType.GET_POPULAR_MOVIES_DATA: {
      return {
        ...state,
        popular_movies_array: action.data,
      };
    }
    case ActionType.GET_TRENDING_MOVIES_DATA: {
      return {
        ...state,
        trendings_movies_array: action.data,
      };
    }
    default:
      return state;
  }
}
