import { combineReducers } from "redux";
import { ButtonSelectionReducer } from "./ButtonSelection";
import { MoviesReducer } from "./Movies";

const reducers = combineReducers({
  buttonSelection: ButtonSelectionReducer,
  movies: MoviesReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
