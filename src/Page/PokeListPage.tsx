import {useEffect, useState} from "react";
import getAPI from "@/axios/getApi.ts";
import {IPokemon} from "@/@types/Poke";
import Poke from "@/Component/Poke.tsx";
import {Container, Flex, Heading, Highlight} from "@chakra-ui/react";
import PokeSearch from "@/Component/PokeSearch.tsx";

export default function PokeListPage() {

    const [poke, setPoke] = useState<IPokemon[]>([])

    useEffect(() => {
        const fetchPoke = async() => {
            try {
                const response = await getAPI.get('/pokemon');
                console.log(response.data);
                setPoke(response.data.slice(1,201));
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchPoke();
    }, [])

    return (
        <>
            <Container fluid>
                <Heading size="5xl" textAlign="center" pb="10">
                    <Highlight query="Pokémon" styles={{ px: "0.5", bg: "yellow.300", color: "yellow.fg" }}>
                        Liste des Pokémon
                    </Highlight>
                </Heading>
                <PokeSearch/>
                <Flex gap="4" wrap="wrap" direction="row" justifyContent="space-around">
                    {poke.map((pokemon : IPokemon, index: number) => (
                        <Poke key={index} pokemon={pokemon} />
                    ))}
                </Flex>
            </Container>
        </>
    )
}