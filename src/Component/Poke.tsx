import {IPokemon} from "@/@types/Poke";
import {Badge, Button, Card, Heading, HStack, Image, Text} from "@chakra-ui/react"
import {IoAddCircleOutline} from "react-icons/io5";
import PokeDetails from "@/Component/PokeDetails.tsx";
import {useDispatch, useSelector} from "react-redux";
import {add} from "@/redux/slices/team.slice.ts";
import {RootState} from "@/redux/store.ts";
import { toaster } from "@/components/ui/toaster"
import { motion } from "framer-motion";

interface PokeProps {
    pokemon : IPokemon;
    key: number;
}

export default function Poke({pokemon} : PokeProps) {

    const dispatch = useDispatch();
    const team = useSelector((state: RootState) => state.team.pokemonsTeams);
    const isAlreadyInTeam = team.some(poke => poke.pokedex_id === pokemon.pokedex_id);
    const MotionCard = motion(Card.Root)

    const handleAddPokemon = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()

        if(isAlreadyInTeam){
            toaster.create({
                description: "Ce Pokémon est déjà dans votre équipe !",
                type: "error"
            })
            return;
        }

        if(team.length >= 6) {
            toaster.create({
                description: "Trop de Pokemons dans l'équipe",
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
                <MotionCard
                    bg="bg.subtle"
                    maxW="xs"
                    overflow="hidden"
                    borderColor="border.emphasized"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    borderWidth="1px"
                >
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
                            <Button colorPalette={"blue"} variant={"subtle"}
                                    onClick={handleAddPokemon}>
                                <IoAddCircleOutline />
                                Ajouter à l'équipe
                            </Button>
                    </Card.Footer>
                </MotionCard>
    );
}