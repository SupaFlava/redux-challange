import { createStore } from "redux";
import AppReducers from "../reducers";
export default createStore(
  AppReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
