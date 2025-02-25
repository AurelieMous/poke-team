import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {Badge, Button, Card, Flex, Image, Text} from "@chakra-ui/react"
import {remove} from "@/redux/slices/team.slice.ts";

export default function TeamList() {

    const dispatch = useDispatch();
    const team = useSelector((state: RootState) => state.team.pokemonsTeams);

    const handlerRemovePokemon = (pokedex_id: number) => {
        dispatch(remove(pokedex_id));
    }

    return (
        <>
            <Flex wrap="wrap" gap={5} justify="center">
                {team.map((pokemon) => (
                    <Card.Root maxW="sm" overflow="hidden" key={pokemon.pokedex_id}>
                        <Image
                            src={pokemon.sprites.regular}
                            alt={pokemon.name.fr}
                        />
                        <Card.Body gap="2">
                            <Card.Title>#{pokemon.pokedex_id} - {pokemon.name.fr}</Card.Title>
                            <Card.Description>
                                {pokemon.category}
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                {pokemon.types?.map((type, index) => (
                                    <Badge key={index} colorScheme="teal">
                                        <Image
                                            objectFit="cover"
                                            maxW="20px"
                                            src={type.image}
                                            alt={type.name}
                                        />
                                        {type.name}
                                    </Badge>
                                ))}
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button colorPalette={"red"} variant={"surface"} onClick={() => handlerRemovePokemon(pokemon.pokedex_id)}>
                                Retirer de l'équipe
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                ))}
            </Flex>

        </>
    )
}