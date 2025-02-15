import {IPokemon} from "@/@types/Poke";
import {Badge, Box, Button, Card, Flex, Heading, HStack, Image} from "@chakra-ui/react"
import {IoAddCircleOutline} from "react-icons/io5";
import {CiCircleInfo} from "react-icons/ci";

interface PokeProps {
    pokemon : IPokemon;
    key: number;
}

export default function Poke({pokemon} : PokeProps) {

    return (
            <Card.Root flexDirection="row" overflow="hidden" minW="xl" maxW="xl">
                <Image
                    objectFit="cover"
                    maxW="250px"
                    src={pokemon.sprites.regular}
                    alt={pokemon.name.fr}
                />
                <Box>
                    <Card.Body>
                        <Card.Title mb="2">#{pokemon.pokedex_id} - {pokemon.name.fr} - {pokemon.name.jp}</Card.Title>
                        <Card.Description>
                            <Heading size="sm">Génération {pokemon.generation}</Heading>
                            <p>{pokemon.category}</p>
                        </Card.Description>
                        <HStack mt="4">
                            {pokemon.types.map((type, index) => (
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
                    <Card.Footer>
                        <Flex direction="column" gap="2" justifyContent="center">
                            <Button colorPalette={"yellow"} variant="surface">
                                <CiCircleInfo />
                                Détails
                            </Button>
                            <Button colorPalette={"green"} variant="surface">
                                <IoAddCircleOutline />
                                Ajouter à l'équipe
                            </Button>
                        </Flex>

                    </Card.Footer>
                </Box>
            </Card.Root>
    );
}