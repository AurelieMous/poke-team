import { useEffect, useState } from "react";
import getAPI from "@/axios/getApi.ts";
import { IPokemon } from "@/@types/Poke";
import Poke from "@/Component/Poke.tsx";
import { Box, Container, Flex, Heading, Highlight, Spinner, Text } from "@chakra-ui/react";
import PokeSearch from "@/Component/PokeSearch.tsx";
import SelectBar from "@/Component/SelectBar.tsx";
import Filter from "@/Component/Filter.tsx";

export default function PokeListPage() {
    const [poke, setPoke] = useState<IPokemon[]>([]);
    const [filteredPoke, setFilteredPoke] = useState<IPokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedGen, setSelectedGen] = useState<string>("1"); // Garde la génération choisie

    // Récupérer les types de pokemon pour le filtrage
    const [types, setTypes] = useState<string[]>([]);

    // Appel API pour récupérer les Pokémon en fonction de la génération
    useEffect(() => {
        const fetchPoke = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await getAPI.get(`/gen/${selectedGen}`);
                setPoke(response.data);
                setFilteredPoke(response.data); // Initialise la liste filtrée
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
            const response = await getAPI.get(`/pokemon/${pokemonName.toLowerCase()}`);
            if (!response) throw new Error("Pokémon non trouvé !");
            console.log(response.data);
            setFilteredPoke([response.data]); // Met à jour la liste avec le Pokémon trouvé
        } catch (error) {
            setError("Pokémon non trouvé !");
            setFilteredPoke([]); // Vide la liste si aucune correspondance
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
                const response = await getAPI.get("/types/");
                setTypes(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des types :", error);
            }
        };
        fetchTypes();
    }, []);

    return (
        <Container fluid>
            <Heading size="5xl" textAlign="center" pb="10">
                <Highlight query="Pokémon" styles={{ px: "0.5", bg: "yellow.300", color: "yellow.fg" }}>
                    Liste des Pokémon
                </Highlight>
            </Heading>

            {/* Composant de sélection de génération */}
            <Flex justifyContent="center" pb="4">
                <SelectBar onChange={setSelectedGen} />
            {/* Composant de recherche */}
                <PokeSearch onSearch={searchPoke} onReset={resetSearch} />
                <Filter />
            </Flex>

            {/* Affichage des erreurs */}
            {error && (
                <Flex justifyContent="center" mt="4">
                    <Text color="red.500">{error}</Text>
                </Flex>
            )}

            {/* Liste des Pokémon API et filtrés */}
            {loading ? (
                <Flex justifyContent="center" mt="4">
                    <Spinner size="xl" />
                </Flex>
            ) : (
                <Flex gap="4" wrap="wrap" direction="row" justifyContent="space-around">
                    {filteredPoke.length > 0 ? (
                        filteredPoke.map((pokemon: IPokemon, index: number) => (
                            <Box key={index} flex="1 1 30%" maxW="30%">
                                <Poke pokemon={pokemon} key={index} />
                            </Box>
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
        </Container>
    );
}
