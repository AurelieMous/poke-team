import {IPokemon} from "@/@types/Poke";
import {Badge, Button, Card, Heading, HStack, Image, Text} from "@chakra-ui/react"
import {IoAddCircleOutline} from "react-icons/io5";
import PokeDetails from "@/Component/PokeDetails.tsx";
import {useDispatch, useSelector} from "react-redux";
import {add} from "@/redux/slices/team.slice.ts";
import {RootState} from "@/redux/store.ts";
import { toaster } from "@/components/ui/toaster"

interface PokeProps {
    pokemon : IPokemon;
    key: number;
}

export default function Poke({pokemon} : PokeProps) {

    const dispatch = useDispatch();
    const team = useSelector((state: RootState) => state.team.pokemonsTeams);

    const handleAddPokemon = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()

        if(team.length >= 6) {
            toaster.create({
                description: "Vous ne pouvez pas ajouter plus de 6 pokémons !",
                type: "warning",
            })
            return;
        }

        dispatch(add(pokemon));
        toaster.create({
            description: "Pokémon ajouté dans l'équipe.",
            type: "success",
        })

    }

    return (
                <Card.Root maxW="sm" overflow="hidden" bg={"orange.contrast"} borderColor="orange.200">

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
                            {pokemon.types?.map((type) => (
                                <Badge key={type.name} colorScheme="teal">
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
                            <Button colorPalette={"bluePerso"}
                                    onClick={handleAddPokemon}>
                                <IoAddCircleOutline />
                                Ajouter à l'équipe
                            </Button>
                    </Card.Footer>
                </Card.Root>
    );
}