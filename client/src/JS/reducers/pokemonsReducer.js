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
  POKEMON_FIGTH_SUCCESS,
  POKEMON_FIGTH,
  POKEMON_FIGTH_FAILED,
} from "../constants/pokemons.constants";

const initialState = {
  loading: false,
  pokemons: [],
  pokemons_list: [],
  msg: "",
  result: "",
};

const pokemonsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POKEMONS:
    case GET_POKEMONS_BY_TYPE:
    case GET_POKEMONS_WEAK_TO:
    case GET_POKEMONS_STRONG_TO:
    case POKEMON_FIGTH:
      return {
        ...state,
        loading: true,
      };

    case POKEMON_FIGTH_SUCCESS:
      return {
        ...state,
        loading: false,
        result: payload.result,
      };

    case "ALL_POKEMONS":
      return {
        ...state,
        loading: false,
        pokemons: payload.pokemons,
        msg: payload.msg,
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
    case POKEMON_FIGTH_FAILED:
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
