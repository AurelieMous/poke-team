import {IPokemon} from "@/@types/Poke";
import {Badge, Button, Flex, Heading, HStack, Image, Tabs, Text, useBreakpointValue} from "@chakra-ui/react"
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
import {BarList, BarListData, useChart} from "@chakra-ui/charts";

interface IResistance {
    name: string;
    multiplier: number;
}

interface IPokeDetailsProps {
    pokemon: IPokemon;
}

export default function PokeDetails({pokemon}: IPokeDetailsProps) {
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch();
    const team = useSelector((state: RootState) => state.team.pokemonsTeams);
    const isAlreadyInTeam = team.some(poke => poke.pokedex_id === pokemon.pokedex_id);

    const imageSize = useBreakpointValue({ base: "100px", md: "150px", lg: "200px" });

    const chart = useChart<BarListData>({
        sort: {by: "value", direction: "desc"},
        data: pokemon.resistances.map((resistance: IResistance) => ({
            name: resistance.name,
            value: resistance.multiplier,
        })),
        series: [{name:'name', color: "bg.info"}]
    });

    const handleAddPokemon = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()

        if (isAlreadyInTeam) {
            toaster.create({
                description: "Ce Pokémon est déjà dans votre équipe !",
                type: "error",
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
        <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)} size="lg">
            <DialogTrigger asChild>
                <Button colorPalette={"green"} variant={"subtle"}>
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
                        <Flex direction="row" gap={{ base: "4", md: "10", lg: "28" }} >
                            <Heading as="h4" fontSize="md">Forme normale</Heading>
                            <Heading as="h4" fontSize="md">Forme Shiny</Heading>
                        </Flex>
                        <Flex direction="row">
                            <Image
                                objectFit="cover"
                                boxSize={imageSize}
                                src={pokemon.sprites.regular}
                                alt={pokemon.name.fr}
                            />
                            <Image
                                objectFit="cover"
                                boxSize={imageSize}
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

                    <Tabs.Root defaultValue="stats" variant="line" pt={{ base: "2", md: "5" }} colorPalette="blue">
                        <Tabs.List justifyContent="center" gap={{ base: "0.5", md: "1", lg: "2" }} flexWrap="wrap">
                            <Tabs.Trigger value="stats" fontSize={{ base: "md", md: "md", lg: "lg" }}>
                                Statistiques
                            </Tabs.Trigger>
                            <Tabs.Trigger value="faiblesses" fontSize={{ base: "md", md: "md", lg: "lg" }}>
                                Faiblesses
                            </Tabs.Trigger>
                            <Tabs.Trigger value="capacity" fontSize={{ base: "md", md: "md", lg: "lg" }}>
                                Capacités
                            </Tabs.Trigger>
                            <Tabs.Trigger value="evolutions" fontSize={{ base: "md", md: "md", lg: "lg" }}>
                                Évolutions
                            </Tabs.Trigger>
                            <Tabs.Trigger value="formes" fontSize={{ base: "md", md: "md", lg: "lg" }}>
                                Formes
                            </Tabs.Trigger>
                        </Tabs.List>

                        <Tabs.Content value="stats">
                            <Flex direction="column" alignItems="center" gap={{ base: "1", md: "2" }}>
                                <HStack fontSize={{ base: "sm", md: "md" }} textAlign="center">
                                    Points de vie : {pokemon.stats?.hp} <FaHeart />
                                </HStack>
                                <HStack fontSize={{ base: "sm", md: "md" }}>
                                    Points d'attaque : {pokemon.stats?.atk} <LuSwords />
                                </HStack>
                                <HStack fontSize={{ base: "sm", md: "md" }}>
                                    Points de défense : {pokemon.stats?.def} <FaShieldAlt />
                                </HStack>
                                <HStack fontSize={{ base: "sm", md: "md" }}>
                                    Points d'attaque spéciale : {pokemon.stats?.spe_atk} <FaShieldAlt /><FaRegStar/>
                                </HStack>
                                <HStack fontSize={{ base: "sm", md: "md" }}>
                                    Points de défense spéciale : {pokemon.stats?.spe_def} <FaShieldAlt /><FaRegStar/>
                                </HStack>
                                <HStack fontSize={{ base: "sm", md: "md" }}>
                                    Vitesse d'attaque : {pokemon.stats?.vit} <IoSpeedometerOutline />
                                </HStack>
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="faiblesses">
                            <Flex direction="column" alignItems="center" gap={{ base: "4", md: "6" }} width="100%">
                                <BarList.Root chart={chart} width="80%">
                                    <BarList.Content>
                                        <BarList.Bar />
                                        <BarList.Value />
                                    </BarList.Content>
                                </BarList.Root>
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="capacity">
                            <Flex direction="column" alignItems="center" gap={{ base: "1", md: "2" }}>
                                {pokemon.talents?.map((talent, index) => (
                                    <Text key={index} fontSize={{ base: "sm", md: "md" }}>
                                        {talent.name}
                                    </Text>
                                ))}
                            </Flex>
                        </Tabs.Content>

                        {/* TODO ajouter des liens pour aller directement sur la fiche de la forme du pokemon */}
                        <Tabs.Content value="evolutions">
                            <Flex direction="column" alignItems="center" gap={{ base: "1", md: "2" }}>
                                {pokemon.evolution?.next ? (
                                    pokemon.evolution.next.map((evolution, index) => (
                                        <Text key={index} fontSize={{ base: "sm", md: "md" }}>
                                            {evolution.name} - #{evolution.pokedex_id}
                                        </Text>
                                    ))
                                ) : (
                                    <Text fontSize={{ base: "sm", md: "md" }}>Pas d'évolution disponible</Text>
                                )}
                            </Flex>
                        </Tabs.Content>

                        {/* TODO ajouter des liens pour aller directement sur la fiche de la forme du pokemon */}
                        <Tabs.Content value="formes">
                            <Flex direction="column" alignItems="center" gap={{ base: "1", md: "2" }}>
                                {Array.isArray(pokemon.formes) && pokemon.formes.length > 0 ? (
                                    pokemon.formes.map((forme, index) => (
                                        <Text key={index} fontSize={{ base: "sm", md: "md" }}>
                                            {forme.name.fr}, {forme.region}
                                        </Text>
                                    ))
                                ) : (
                                    <Text fontSize={{ base: "sm", md: "md" }}>Pas d'autres formes disponibles</Text>
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