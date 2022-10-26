import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducers";
import { applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
