import {IPokemon} from "@/@types/Poke";

interface TypeList{
    id: number,
    name: {
        fr: string;
        en: string;
        jp: string;
    },
    sprites: string,
    resistance: [
        {
            name: string;
            multiplier: number;
        }
    ],
}

interface TypeWithPokemon {
    id: number;
    name: {
        fr: string;
        en: string;
        jp: string;
    },
    resistance: [
        {
            name: string;
            multiplier: number;
        }
    ],
    pokemons: [IPokemon]
}