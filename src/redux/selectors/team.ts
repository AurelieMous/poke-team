import { RootState } from "../store";

export const getPoke = (id:number) => (state: RootState) =>{
    return state.team.pokemons.find((pokemon) => poke.id === id);
}