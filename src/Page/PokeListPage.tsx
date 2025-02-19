import { useEffect, useState } from "react";
import getAPI from "@/axios/getApi.ts";
import { IPokemon } from "@/@types/Poke";
import Poke from "@/Component/Poke.tsx";
import { Box, Container, Flex, Heading, Highlight, Spinner } from "@chakra-ui/react";
import PokeSearch from "@/Component/PokeSearch.tsx";
import SelectBar from "@/Component/SelectBar.tsx";

export default function PokeListPage() {
    const [poke, setPoke] = useState<IPokemon[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredPoke, setFilteredPoke] = useState<IPokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedGen, setSelectedGen] = useState<string>("1"); // Garde la génération choisie

    // Appel API pour récupérer les Pokémon en fonction de la génération
    useEffect(() => {
        const fetchPoke = async () => {
            setLoading(true);
            try {
                const response = await getAPI.get(`/gen/${selectedGen}`);
                console.log(response.data);
                setPoke(response.data);
                setFilteredPoke(response.data); // Initialise la liste filtrée
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchPoke();
    }, [selectedGen]); // Dépend de la génération choisie

    // Filtrage des Pokémon par nom
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            const filtered = poke.filter((pokemon) =>
                pokemon.name.fr.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPoke(filtered);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm, poke]);

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
            </Flex>

            {/* Composant de recherche */}
            <PokeSearch onSearch={(term) => setSearchTerm(term)} />

            {/* Liste des Pokémon API et filtrés */}
            {loading ? (
                <Flex justifyContent="center" mt="4">
                    <Spinner size="xl" />
                </Flex>
            ) : (
                <Flex gap="4" wrap="wrap" direction="row" justifyContent="space-around">
                    {filteredPoke.map((pokemon: IPokemon, index: number) => (
                        <Box key={index} flex="1 1 30%" maxW="30%">
                            <Poke pokemon={pokemon} key={index} />
                        </Box>
                    ))}
                </Flex>
            )}
        </Container>
    );
}
