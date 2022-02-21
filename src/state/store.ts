import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";

import { createPromise } from "redux-promise-middleware";
import ReduxThunk from "redux-thunk";

export const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk, createPromise())
);
