import {useEffect, useState} from "react";
import getAPI from "@/axios/getApi.ts";
import {IPokemon} from "@/@types/Poke";
import Poke from "@/Component/Poke.tsx";
import {Box, Container, Flex, Heading, Highlight, Spinner} from "@chakra-ui/react";
import PokeSearch from "@/Component/PokeSearch.tsx";

export default function PokeListPage() {

    // Pour stocker les pokemons
    const [poke, setPoke] = useState<IPokemon[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredPoke, setFilteredPoke] = useState<IPokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // Appel à l'api pour récupérer les données
    // getAPI est une instance personnalisée d'Axios
    useEffect(() => {
        const fetchPoke = async() => {
            try {
                const response = await getAPI.get('/gen/1');
                console.log(response.data);
                // On appel seulement les 80 premiers pokemons
                setPoke(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchPoke();
    }, [])

    // Délai entre la saisie et le filtrage des pokemons
    useEffect(() => {
        setLoading(true);

        const delayDebounce = setTimeout(() => {
            const filtered = poke.filter((pokemon) =>
                pokemon.name.fr.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPoke(filtered);
            setLoading(false);
            // Délai de 500ms après la dernière saisie
        }, 500);

        // Nettoie le timeout si l'utilisateur tape encore
        return () => clearTimeout(delayDebounce);
    }, [searchTerm, poke]);

    return (
        <>
            <Container fluid>
                <Heading size="5xl" textAlign="center" pb="10">
                    <Highlight query="Pokémon" styles={{ px: "0.5", bg: "yellow.300", color: "yellow.fg" }}>
                        Liste des Pokémon
                    </Highlight>
                </Heading>

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
        </>
    )
}