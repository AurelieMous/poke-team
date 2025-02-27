// Ou l'on va développer les différentes fonctionnalités d'ajout et de retrait des Pokémons
// Ainsi que les calculs des hp, atk etc

import {IPokemon} from "@/@types/Poke";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IPokemonTeam extends IPokemon {
    quantity: number;
}

// pokemons est le tableau des pokemons mais il ne doit pas dépasser 6
export interface TeamState {
    pokemonsTeams: IPokemonTeam[];
    totalHp: number;
    totalAtk: number;
    totalDef: number;
    totalSpeAtk: number;
    totalSpeDef: number;
    totalSpeed: number;
}

const initialState: TeamState = {
    pokemonsTeams: [],
    totalHp: 0,
    totalAtk: 0,
    totalDef: 0,
    totalSpeAtk: 0,
    totalSpeDef: 0,
    totalSpeed: 0,
};

const calculTotalHp = (pokemons: IPokemonTeam[]) : number => {
    return pokemons.reduce((total, pokemon) => total + pokemon.stats.hp, 0);
}
const calculTotalAtk = (pokemons: IPokemonTeam[]) : number => {
    return pokemons.reduce((total, pokemon) => total + pokemon.stats.atk, 0);
}
const calculTotalDef = (pokemons: IPokemonTeam[]): number => {
    return pokemons.reduce((total, pokemon) => total + pokemon.stats.def, 0);
}
const calculTotalSpeAtk = (pokemons: IPokemonTeam[]): number => {
    return pokemons.reduce((total, pokemon) => total + pokemon.stats.spe_atk, 0);
}
const calculTotalSpeDef = (pokemons: IPokemonTeam[]): number => {
    return pokemons.reduce((total, pokemon) => total + pokemon.stats.spe_def, 0);
}
const calculTotalSpeed = (pokemons: IPokemonTeam[]): number => {
    return pokemons.reduce((total, pokemon) => total + pokemon.stats.vit, 0);
}

const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers : {
        add: (state, action: PayloadAction<IPokemon>) => {

            // Vérifie si la team dépasse 6 Pokémons
            if(state.pokemonsTeams.length >= 6) {
                throw new Error("L'équipe ne peut pas dépasser 6 Pokémons !");
            }
            const existingPokemon = state.pokemonsTeams.find(
                pokemon => pokemon.pokedex_id === action.payload.pokedex_id
            );
            if (existingPokemon){
                existingPokemon.quantity += 1;
            }else{
                state.pokemonsTeams.push({ ...action.payload, quantity: 1 });
            }

            // Met à jour les statistiques
            state.totalHp = calculTotalHp(state.pokemonsTeams);
            state.totalAtk = calculTotalAtk(state.pokemonsTeams);
            state.totalDef = calculTotalDef(state.pokemonsTeams);
            state.totalSpeAtk = calculTotalSpeAtk(state.pokemonsTeams);
            state.totalSpeDef = calculTotalSpeDef(state.pokemonsTeams);
            state.totalSpeed = calculTotalSpeed(state.pokemonsTeams);
        },

        remove: (state, action: PayloadAction<number>) => {
            state.pokemonsTeams = state.pokemonsTeams.filter(
                pokemon => pokemon.pokedex_id !== action.payload
            );

            // Met à jour les statistiques
            state.totalHp = calculTotalHp(state.pokemonsTeams);
            state.totalAtk = calculTotalAtk(state.pokemonsTeams);
            state.totalDef = calculTotalDef(state.pokemonsTeams);
            state.totalSpeAtk = calculTotalSpeAtk(state.pokemonsTeams);
            state.totalSpeDef = calculTotalSpeDef(state.pokemonsTeams);
            state.totalSpeed = calculTotalSpeed(state.pokemonsTeams);
        },

        resetTeam: (state) => {
            state.pokemonsTeams = [];
            state.totalHp = 0;
            state.totalAtk = 0;
            state.totalDef = 0;
            state.totalSpeAtk = 0;
            state.totalSpeDef = 0;
            state.totalSpeed = 0;
        }
    }
})

export const { add, remove, resetTeam } = teamSlice.actions;
export default teamSlice.reducer;