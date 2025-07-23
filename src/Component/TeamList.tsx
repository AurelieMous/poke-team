import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {Badge, Button, Card, Flex, Heading, Image, Text} from "@chakra-ui/react"
import {remove} from "@/redux/slices/team.slice.ts";
import { motion } from "framer-motion";
import PokeDetails from "@/Component/PokeDetails.tsx";
import {useState} from "react";
import {IPokemon} from "@/@types/Poke";

export default function TeamList() {

    const dispatch = useDispatch();
    const team = useSelector((state: RootState) => state.team.pokemonsTeams);
    const MotionCard = motion(Card.Root)
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [onePokemon, setOnePokemon] = useState<IPokemon | undefined>();

    const handlerRemovePokemon = (pokedex_id: number) => {
        dispatch(remove(pokedex_id));
    }
    const handleCardClick = (pokemon: IPokemon) => {
        setOnePokemon(pokemon);
        setIsOpen(true);
    }


    return (
        <>
                <Flex wrap="wrap" gap={5} justify="center">
                    {team.length > 0 ? (
                        team.map((pokemon) => (
                            <MotionCard
                                maxW="xs"
                                overflow="hidden"
                                borderColor="bluePerso.200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                borderWidth="1px"
                                onClick={() => handleCardClick(pokemon)}
                                cursor="pointer"
                                key={pokemon.pokedex_id}>
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
                            </MotionCard>
                            ))
                    ):(
                        <Heading>Aucun Pokémon dans l'équipe</Heading>
                    )}

                </Flex>
            {onePokemon && (
                <PokeDetails
                    isOpen={isOpen}
                    pokemon={onePokemon}
                    setIsOpen={setIsOpen} />
            )}

        </>
    )
}