import { combineReducers } from "redux";
import pokemonsReducer from "./pokemonsReducer";

const rootReducer = combineReducers({
  pokemonsReducer,
});

export default rootReducer;
