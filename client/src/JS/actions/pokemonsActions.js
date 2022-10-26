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
  POKEMON_FIGTH,
  POKEMON_FIGTH_FAILED,
  POKEMON_FIGTH_SUCCESS,
} from "../constants/pokemons.constants";
import axios from "axios";
import Swal from "sweetalert2";

export const getAllPokemons = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POKEMONS });

  try {
    const res = await axios.get("/pokemons");
    dispatch({ type: "ALL_POKEMONS", payload: res.data });
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

export const pokemonFigth = (fields) => async (dispatch) => {
  dispatch({ type: POKEMON_FIGTH });

  try {
    const res = await axios.post(`/pokemons/figth/`, fields);

    dispatch({ type: POKEMON_FIGTH_SUCCESS, payload: res.data });

    if (res.data.result == "Win") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${res.data.result}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (res.data.result == "Lose") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${res.data.result}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (res.data.result == "Draw") {
      Swal.fire({
        position: "center",
        icon: "info",
        title: `${res.data.result}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    dispatch({
      type: POKEMON_FIGTH_FAILED,
      payload: error.response.data,
    });
  }
};
