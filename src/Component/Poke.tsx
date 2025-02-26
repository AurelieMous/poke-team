import {IPokemon} from "@/@types/Poke";
import {Badge, Button, Card, Heading, HStack, Image, Text} from "@chakra-ui/react"
import {IoAddCircleOutline} from "react-icons/io5";
import PokeDetails from "@/Component/PokeDetails.tsx";
import {useDispatch} from "react-redux";
import {add} from "@/redux/slices/team.slice.ts";

interface PokeProps {
    pokemon : IPokemon;
    key: number;
}

export default function Poke({pokemon} : PokeProps) {

    const dispatch = useDispatch();

    return (
                <Card.Root maxW="sm" overflow="hidden">
                    <Image
                        src={pokemon.sprites.regular}
                        alt={pokemon.name.fr}
                    />
                    <Card.Body gap="2">
                        <Card.Title>
                            <Heading fontSize="xl">
                                #{pokemon.pokedex_id} - {pokemon.name.fr} - {pokemon.name.jp}
                            </Heading>
                        </Card.Title>
                        <Card.Description>
                            <Heading size="sm">Génération {pokemon.generation}</Heading>
                            <Text textStyle="md">{pokemon.category}</Text>
                        </Card.Description>
                        <HStack mt="4" justifyContent="center">
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
                        </HStack>
                    </Card.Body>
                    <Card.Footer gap="2" justifyContent="center">
                            <PokeDetails pokemon={pokemon} />
                            <Button colorPalette={"green"}
                                    variant="surface"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(add(pokemon));
                                    }}>
                                <IoAddCircleOutline />
                                Ajouter à l'équipe
                            </Button>
                    </Card.Footer>
                </Card.Root>
    );
}