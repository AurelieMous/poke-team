import {IPokemon} from "@/@types/Poke";
import {Badge, Button, Flex, Heading, HStack, Image, Tabs, Text} from "@chakra-ui/react"
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import {CiCircleInfo} from "react-icons/ci";
import {IoAddCircleOutline, IoSpeedometerOutline} from "react-icons/io5";
import {FaHeart, FaRegStar, FaShieldAlt, FaWeightHanging} from "react-icons/fa";
import {MdHeight} from "react-icons/md";
import {LuSwords} from "react-icons/lu";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {toaster} from "@/components/ui/toaster.tsx";
import {add} from "@/redux/slices/team.slice.ts";

interface IPokeDetailsProps {
    pokemon: IPokemon;
}

export default function PokeDetails({pokemon}: IPokeDetailsProps) {
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch();
    const team = useSelector((state: RootState) => state.team.pokemonsTeams);

    const handleAddPokemon = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()

        if(team.length >= 6) {
            toaster.create({
                description: "\"Trop de Pokemons dans l'équipe",
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
        <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)} size="lg">
            <DialogTrigger asChild>
                <Button colorPalette={"orangePerso"}>
                    <CiCircleInfo />
                    Détails
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <Heading size="2xl" >
                            Détails du Pokemon #{pokemon.pokedex_id}
                        </Heading>
                    </DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Heading textAlign={"center"} size={"2xl"} color={"bluePerso.200"}>{pokemon.name.fr} - {pokemon.name.jp}</Heading>
                    <Flex direction="column" alignItems="center">
                        <Flex direction="row" gap="28">
                            <Heading as="h4" fontSize="md">Forme normale</Heading>
                            <Heading as="h4" fontSize="md">Forme Shiny</Heading>
                        </Flex>
                        <Flex direction="row">
                            <Image
                                objectFit="cover"
                                maxW="200px"
                                src={pokemon.sprites.regular}
                                alt={pokemon.name.fr}
                            />
                            <Image
                                objectFit="cover"
                                maxW="200px"
                                src={pokemon.sprites.shiny}
                                alt={pokemon.name.fr}
                            />
                        </Flex>
                        <Heading>Génération {pokemon.generation}</Heading>
                        <Text textStyle="md">{pokemon.category}</Text>
                        <Flex direction="row" alignItems="center" gap="3">
                            <Text textStyle="md">
                                <FaWeightHanging />
                            </Text>
                            <Text textStyle="md">
                                {pokemon.weight}
                            </Text>
                        </Flex>
                        <Flex direction="row" alignItems="center" gap="3">
                            <Text textStyle="md">
                                <MdHeight />
                            </Text>
                            <Text textStyle="md">
                                {pokemon.height}
                            </Text>
                        </Flex>

                        <HStack mt="4">
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
                    </Flex>

                    <Tabs.Root defaultValue="stats" variant={"line"} pt="5" colorPalette="bluePerso">
                        <Tabs.List>
                            <Tabs.Trigger value="stats">
                                Statistiques
                            </Tabs.Trigger>
                            <Tabs.Trigger value="resistances">
                                Résistances
                            </Tabs.Trigger>
                            <Tabs.Trigger value="capacity">
                                Capacités
                            </Tabs.Trigger>
                            <Tabs.Trigger value="evolutions">
                                Évolutions
                            </Tabs.Trigger>
                            <Tabs.Trigger value="formes">
                                Formes
                            </Tabs.Trigger>
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="stats">
                            <Flex direction="column" alignItems="center" gap="2">
                                <HStack fontSize="md" textAlign="center">
                                    Points de vie : {pokemon.stats?.hp} <FaHeart />
                                </HStack>
                                <HStack fontSize="md">
                                    Points d'attaque : {pokemon.stats?.atk} <LuSwords />
                                </HStack>
                                <HStack fontSize="md">
                                    Points de défense : {pokemon.stats?.def}<FaShieldAlt />
                                </HStack>
                                <HStack fontSize="md">
                                    Points d'attaque spéciale : {pokemon.stats?.spe_atk}<FaShieldAlt /><FaRegStar/>
                                </HStack>
                                <HStack fontSize="md">
                                    Points de défense spéciale :  {pokemon.stats?.spe_def}<FaShieldAlt /><FaRegStar/>
                                </HStack>
                                <HStack fontSize="md">
                                    Vitesse d'attaque : {pokemon.stats?.vit}<IoSpeedometerOutline />
                                </HStack>
                            </Flex>

                        </Tabs.Content>
                        <Tabs.Content value="resistances">
                            <Flex direction="column" alignItems="center" gap="1">
                                {pokemon.resistances?.map((resistance) => (
                                    <Text fontSize="md">
                                        {resistance.name} : x{resistance.multiplier}
                                    </Text>
                                ))}
                            </Flex>

                        </Tabs.Content>
                        <Tabs.Content value="capacity">
                            <Flex direction="column" alignItems="center" gap="1">
                                {pokemon.talents?.map((talent) => (
                                    <Text fontSize="md">
                                        {talent.name}
                                    </Text>
                                ))}
                            </Flex>

                        </Tabs.Content>
                        <Tabs.Content value="evolutions">
                            <Flex direction="column" alignItems="center" gap="1">
                                {pokemon.evolution?.next ? (
                                    pokemon.evolution.next.map((evolution) => (
                                        <Text fontSize="md">{evolution.name} - #{evolution.pokedex_id}</Text>
                                    ))
                                ) : (
                                    <Text fontSize="md">Pas d'évolution disponible</Text>
                                )}
                            </Flex>
                        </Tabs.Content>
                        <Tabs.Content value="formes">
                            <Flex direction="column" alignItems="center" gap="1">
                                {Array.isArray(pokemon.formes) && pokemon.formes.length > 0 ? (
                                    pokemon.formes.map((forme: { name: { fr: string }; region: string }, index: number) => (
                                        <Text key={index} fontSize="md">{forme.name.fr}, {forme.region}</Text>
                                    ))
                                ) : (
                                    <Text fontSize="md">Pas d'autres formes disponibles</Text>
                                )}
                            </Flex>

                        </Tabs.Content>
                    </Tabs.Root>

                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Fermer</Button>
                    </DialogActionTrigger>
                    <Button colorPalette={"green"} variant="surface" onClick={handleAddPokemon}>
                        <IoAddCircleOutline />
                        Ajouter à l'équipe
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}