import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState = {
  selected: "Popular",
};

export function ButtonSelectionReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.BUTTON_SELECTION: {
      return { ...state, selected: action.data };
    }
    default:
      return state;
  }
}
