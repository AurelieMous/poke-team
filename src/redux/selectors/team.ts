import { RootState } from "../store";

export const getPoke = (id:number) => (state: RootState) =>{
    return state.team.pokemonsTeams.find((pokemon) => pokemon.pokedex_id === id);
}