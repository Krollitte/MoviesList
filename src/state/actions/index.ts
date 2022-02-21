import { MovieDTO } from "../../dtos/MovieDTO";
import { ActionType } from "../action-types";

interface ButtonSelectionAction {
  type: ActionType.BUTTON_SELECTION;
  data: string;
}

interface MoviesActions {
  type:
    | ActionType.GET_RECOMMENDED_MOVIES_IDS
    | ActionType.GET_TRENDING_MOVIES_IDS
    | ActionType.GET_POPULAR_MOVIES_IDS
    | ActionType.GET_RECOMMENDED_MOVIES_DATA
    | ActionType.GET_TRENDING_MOVIES_DATA
    | ActionType.GET_POPULAR_MOVIES_DATA;
  data: any;
}

export type Action = ButtonSelectionAction | MoviesActions;
