import { pokemonAPI } from "../../../api/pokemonAPI";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());
        const resp = await pokemonAPI.get(`/pokemon?limit=10&offset=${page * 10}`)
        dispatch(setPokemons({page: page+1, pokemons: resp.data.results}))
    }
}