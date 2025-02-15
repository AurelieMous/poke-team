import {useEffect, useState} from "react";
import getAPI from "@/axios/getApi.ts";
import {IPokemon} from "@/@types/Poke";
import Poke from "@/Component/Poke.tsx";
import {Container, Flex} from "@chakra-ui/react";

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
                <h1>Liste des pokémon</h1>
                <Flex gap="4" wrap="wrap" direction="row" justifyContent="space-around">
                    {poke.map((pokemon : IPokemon, index: number) => (
                        <Poke key={index} pokemon={pokemon} />
                    ))}
                </Flex>
            </Container>
        </>
    )
}