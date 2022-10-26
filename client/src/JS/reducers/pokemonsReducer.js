import {
  GET_ALL_POKEMONS,
  GET_ALL_POKEMONS_FAILED,
  GET_ALL_POKEMONS_SUCCESS,
  GET_POKEMONS_BY_TYPE,
  GET_POKEMONS_BY_TYPE_FAILED,
  GET_POKEMONS_BY_TYPE_SUCCESS,
  GET_POKEMONS_STRONG_TO,
  GET_POKEMONS_STRONG_TO_FAILED,
  GET_POKEMONS_STRONG_TO_SUCCESS,
  GET_POKEMONS_WEAK_TO,
  GET_POKEMONS_WEAK_TO_FAILED,
  GET_POKEMONS_WEAK_TO_SUCCESS,
} from "../constants/pokemons.constants";

const initialState = {
  loading: false,
  pokemons_list: [],
};

const pokemonsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POKEMONS:
    case GET_POKEMONS_BY_TYPE:
    case GET_POKEMONS_WEAK_TO:
    case GET_POKEMONS_STRONG_TO:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_POKEMONS_SUCCESS:
    case GET_POKEMONS_BY_TYPE_SUCCESS:
    case GET_POKEMONS_WEAK_TO_SUCCESS:
    case GET_POKEMONS_STRONG_TO_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons_list: payload.pokemons,
        msg: payload.msg,
      };
    case GET_ALL_POKEMONS_FAILED:
    case GET_POKEMONS_BY_TYPE_FAILED:
    case GET_POKEMONS_WEAK_TO_FAILED:
    case GET_POKEMONS_STRONG_TO_FAILED:
      return {
        ...state,
        loading: false,
        msg: payload.msg,
      };

    default:
      return state;
  }
};

export default pokemonsReducer;
