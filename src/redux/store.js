import { createStore, compose, applyMiddleware } from "redux";
import immutableInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

import reducer from "./reducer";
import throttle from "lodash.throttle";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
} from "./localStorage.js";

const middleware =
  process.env.NODE_ENV === "production"
    ? [thunk]
    : [immutableInvariant(), thunk];

const enhancer = compose(applyMiddleware(...middleware));

const store = createStore(reducer, loadStateFromLocalStorage(), enhancer);

store.subscribe(
  throttle(() => {
    saveStateToLocalStorage(store.getState());
  }, 5000)
);

export default store;
