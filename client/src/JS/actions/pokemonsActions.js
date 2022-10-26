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
import axios from "axios";

export const getAllPokemons = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POKEMONS });

  try {
    const res = await axios.get("/pokemons");

    dispatch({ type: GET_ALL_POKEMONS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_POKEMONS_FAILED, payload: error.response.data });
  }
};

export const getAllPokemonByType = (typeName) => async (dispatch) => {
  dispatch({ type: GET_POKEMONS_BY_TYPE });

  try {
    const res = await axios.get(`/pokemons/${typeName}`);

    dispatch({ type: GET_POKEMONS_BY_TYPE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_POKEMONS_BY_TYPE_FAILED,
      payload: error.response.data,
    });
  }
};

export const getPokemonsWeakTo = (typeName) => async (dispatch) => {
  dispatch({ type: GET_POKEMONS_WEAK_TO });

  try {
    const res = await axios.get(`/pokemons/weak/${typeName}`);

    dispatch({ type: GET_POKEMONS_WEAK_TO_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_POKEMONS_WEAK_TO_FAILED,
      payload: error.response.data,
    });
  }
};

export const getPokemonsStrongTo = (typeName) => async (dispatch) => {
  dispatch({ type: GET_POKEMONS_STRONG_TO });

  try {
    const res = await axios.get(`/pokemons/strong/${typeName}`);

    dispatch({ type: GET_POKEMONS_STRONG_TO_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_POKEMONS_STRONG_TO_FAILED,
      payload: error.response.data,
    });
  }
};
