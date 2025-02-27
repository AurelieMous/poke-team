import { useEffect, useState } from "react";
import getAPI from "@/axios/getApi.ts";
import { IPokemon } from "@/@types/Poke";
import Poke from "@/Component/Poke.tsx";
import {Button, Container, Flex, Heading, Highlight, Spinner, Text} from "@chakra-ui/react";
import PokeSearch from "@/Component/PokeSearch.tsx";
import SelectBar from "@/Component/SelectBar.tsx";
import Filter from "@/Component/Filter.tsx";
import {TypeList} from "@/@types/Type";
import {Toaster} from "@/components/ui/toaster.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {useNavigate} from "react-router";


export default function PokeListPage() {

    const [poke, setPoke] = useState<IPokemon[]>([]);
    const [filteredPoke, setFilteredPoke] = useState<IPokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedGen, setSelectedGen] = useState<string>("1"); // Garde la génération choisie

    // Récupérer les types de pokemon pour le filtrage
    const [types, setTypes] = useState<TypeList[]>([]);
    const navigate = useNavigate();


    // Appel API pour récupérer les Pokémon en fonction de la génération
    useEffect(() => {
        const fetchPoke = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await getAPI.get(`/gen/${selectedGen}`);
                setPoke(response.data);
                setFilteredPoke(response.data);
            } catch (error) {
                setError("Erreur lors de la récupération des Pokémon.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchPoke();
    }, [selectedGen]);

    // Recherche d'un Pokémon via API
    const searchPoke = async (pokemonName: string) => {
        setLoading(true);
        setError(null);
        console.log("Recherche :", pokemonName);

        try {
            const normalizedPoke = pokemonName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const response = await getAPI.get(`/pokemon/${normalizedPoke}`);
            if (!response) setError("Pokémon non trouvé !");
            setFilteredPoke([response.data]); // Met à jour la liste avec le Pokémon trouvé
        } catch (error) {
            setError("Pokémon non trouvé !");
            setFilteredPoke([]); // Vide la liste si aucune correspondance
        } finally {
            setLoading(false);
        }
    };

    // Fonction pour rechercher les Pokémon par type
    const searchPokeWithType = async (typesName: string) => {
        setLoading(true);
        setError(null);
        try {
            const normalizedType = typesName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const response = await getAPI.get(`/types/${normalizedType}`);
            if (!response) {
                setError("Le type n'existe pas");
            } else {
                // On suppose que response.data.pokemon contient la liste des Pokémon filtrés par type
                setFilteredPoke(response.data.pokemons);
            }
        } catch (error) {
            setError(`Erreur lors de la récupération des données : ${error}`);
        } finally {
            setLoading(false);
        }
    };


    // Réinitialiser la recherche pour revenir à la liste initiale
    const resetSearch = () => {
        setFilteredPoke(poke);
        setError(null);
    };

    // Récupération des types depuis l'API
    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await getAPI.get("/types");
                setTypes(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des types :", error);
            }
        };
        fetchTypes();
    }, []);

    const team = useSelector((state: RootState) => state.team.pokemonsTeams);

    useEffect(() => {
        console.log(team)
    }, [team])

    return (
        <Container fluid pt={200}>
            <Heading size="5xl" textAlign="center" pb="10">
                <Highlight query="Pokémon" styles={{ px: "0.5", bg: "yellow.300", color: "yellow.fg" }}>
                    Liste des Pokémon
                </Highlight>
                <Button onClick={() => navigate('/team')}>
                    Equipe
                </Button>
            </Heading>


            <Flex justifyContent="center" pb="4" alignItems="center" gap="4">
                {/* Composant de sélection de génération */}
                <SelectBar onChange={setSelectedGen} />
                {/* Composant de recherche */}
                <PokeSearch onSearch={searchPoke} onReset={resetSearch} />
                {/* Composant de filtres par types */}
                <Filter types={types} searchPokeWithType={searchPokeWithType}/>
            </Flex>

            {/* Liste des Pokémon API et filtrés */}
            {loading ? (
                <Flex justifyContent="center" mt="4">
                    <Spinner size="xl" />
                </Flex>
            ) : (
                <Flex gap="2" wrap="wrap" justifyContent="center">
                    {filteredPoke ? (
                        filteredPoke.map((pokemon: IPokemon, index: number) => (
                                <Poke key={index} pokemon={pokemon}/>
                        ))
                    ) : (
                        !error && (
                            <Text mt="4" textAlign="center" fontSize="xl">
                                Aucun Pokémon trouvé.
                            </Text>
                        )
                    )}
                </Flex>
            )}
            <Toaster />
        </Container>
    );
}
