export interface IPokemon {
    pokedex_id: number;
    generation: number;
    category: string;
    name: {
        fr: string;
        en: string;
        jp: string;
    };
    sprites: {
        regular: string;
        shiny: string;
        gmax: string | null;
    };
    types: Array<{
        name: string;
        image: string;
    }>;
    talents: Array<{
        name: string;
        tc: boolean; // true si talent caché
    }>;
    stats: {
        hp: number;
        atk: number;
        def: number;
        spe_atk: number;
        spe_def: number;
        vit: number;
    };
    resistances: Array<{
        name: string;
        multiplier: number;
    }>;
    evolution: {
        pre: {
            pokedex_id: number;
            name: string;
            condition: string;
        } | null;
        next: Array<{
            pokedex_id: number;
            name: string;
            condition: string;
        }>;
        mega: string | null;
    };
    height: string; // Ex : "0,7 m"
    weight: string; // Ex : "6,9 kg"
    egg_groups: string[];
    sexe: {
        male: number; // Pourcentage de mâles (ex : 87.5)
        female: number; // Pourcentage de femelles (ex : 12.5)
    };
    catch_rate: number;
    level_100: number;
    formes: string | null;
}
