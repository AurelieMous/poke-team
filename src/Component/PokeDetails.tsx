import {IPokemon} from "@/@types/Poke";
import {
    Badge,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Span,
    Tabs,
    Text,
    useBreakpointValue
} from "@chakra-ui/react"
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
} from "@/components/ui/dialog"
import {IoSpeedometerOutline} from "react-icons/io5";
import {FaHeart, FaRegStar, FaShieldAlt, FaWeightHanging} from "react-icons/fa";
import {MdHeight} from "react-icons/md";
import {LuSwords} from "react-icons/lu";

interface IPokeDetailsProps {
    pokemon: IPokemon;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export default function PokeDetails({pokemon, isOpen, setIsOpen}: IPokeDetailsProps) {

    const imageSize = useBreakpointValue({ base: "100px", md: "150px", lg: "200px" });


    type PokemonTypeName =
        | "Acier" | "Combat" | "Dragon" | "Eau" | "Électrik" | "Feu" | "Fée" | "Glace"
        | "Insecte" | "Normal" | "Plante" | "Poison" | "Psy" | "Roche"
        | "Sol" | "Spectre" | "Ténèbres" | "Vol";

    const colorType = (pokemon: IPokemon) => {
        const typeColor: Record<PokemonTypeName, string> = {
            Acier: "gray.400",
            Combat: "yellow.400",
            Dragon: "purple.300",
            Eau: "blue.300",
            Électrik: "yellow.200",
            Feu: "red.700",
            Fée: "pink.300",
            Glace: "cyan.500",
            Insecte: "green.700",
            Normal: "orange.50",
            Plante: "green.500",
            Poison: "purple.500",
            Psy: "pink.400",
            Roche: "red.900",
            Sol: "yellow.500",
            Spectre: "purple.900",
            Ténèbres: "gray.950",
            Vol: "teal.200"
        };

        return pokemon.types.map(typeObj => {
            const name = typeObj.name;
            return typeColor[name as PokemonTypeName] || "gray";
        });
    };

    const colorFont = (pokemon: IPokemon) => {
        const typeFontColor: Record<PokemonTypeName, string> = {
            Acier: "black",
            Combat: "black",
            Dragon: "black",
            Eau: "black",
            Électrik: "black",
            Feu: "white",
            Fée: "black",
            Glace: "white",
            Insecte: "white",
            Normal: "black",
            Plante: "black",
            Poison: "white",
            Psy: "white ",
            Roche: "white",
            Sol: "black",
            Spectre: "white",
            Ténèbres: "white",
            Vol: "black"
        }
        return pokemon.types.map(typeObj => {
            const name = typeObj.name;
            return typeFontColor[name as PokemonTypeName] || "gray";
        });
    }

    return (
        <DialogRoot lazyMount open={isOpen} onOpenChange={(e) => setIsOpen(e.open)} size="lg">
            <DialogContent>
                <DialogHeader backgroundColor={colorType(pokemon)[0]} borderRadius={"sm"}>
                    <DialogTitle>
                        <Heading size="xl" color={colorFont(pokemon)[0]}>
                                Détails du Pokemon #{pokemon.pokedex_id}
                        </Heading>
                    </DialogTitle>
                </DialogHeader>
                <DialogBody backgroundColor={"gray.100"}>
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

                    <Tabs.Root defaultValue="stats" variant="line" pt={{ base: "2", md: "5" }} colorPalette={colorType(pokemon)[0]}>
                        <Tabs.List justifyContent="center" gap={{ base: "0.5", md: "1", lg: "2" }} flexWrap="wrap">
                            <Tabs.Trigger value="stats" fontSize={{ base: "md", md: "md", lg: "lg" }}>
                                Statistiques
                            </Tabs.Trigger>
                            <Tabs.Trigger value="faiblesses" fontSize={{ base: "md", md: "md", lg: "lg" }}>
                                Faiblesses
                            </Tabs.Trigger>
                            <Tabs.Trigger value="resistances" fontSize={{ base: "md", md: "md", lg: "lg" }}>
                                Résistances
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
                                    Points de vie : {pokemon.stats?.hp} <Span color={"red"}><FaHeart /></Span>
                                </HStack>
                                <HStack fontSize={{ base: "sm", md: "md" }}>
                                    Points d'attaque : {pokemon.stats?.atk} <Span color={"gray"}><LuSwords /></Span>
                                </HStack>
                                <HStack fontSize={{ base: "sm", md: "md" }}>
                                    Points de défense : {pokemon.stats?.def} <Span color="blue"><FaShieldAlt /></Span>
                                </HStack>
                                <HStack fontSize={{ base: "sm", md: "md" }}>
                                    Points d'attaque spéciale : {pokemon.stats?.spe_atk}
                                    <Span color={"gray"}><LuSwords /></Span>
                                    <Span color={"orange"}><FaRegStar/></Span>

                                </HStack>
                                <HStack fontSize={{ base: "sm", md: "md" }}>
                                    Points de défense spéciale : {pokemon.stats?.spe_def}
                                    <Span color="blue"><FaShieldAlt /></Span>
                                    <Span color={"orange"}><FaRegStar/></Span>
                                </HStack>
                                <HStack fontSize={{ base: "sm", md: "md" }}>
                                    Vitesse d'attaque : {pokemon.stats?.vit}
                                    <Span color="fg"><IoSpeedometerOutline /></Span>
                                </HStack>
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="faiblesses">
                                <Flex direction="row" justifyContent="center" gap={"4"} pt={"6"} width="100%">
                                    {pokemon.resistances
                                        ?.filter(resistance => resistance.multiplier > 1)
                                        .map((resistance, index) => (
                                            <Badge variant="solid" key={index} fontSize={{ base: "md", md: "lg" }}>
                                                {resistance.name}
                                            </Badge>
                                        ))}
                                </Flex>
                        </Tabs.Content>

                        <Tabs.Content value="resistances">
                            <Flex direction="row" justifyContent="center" gap={"4"} pt={"6"} width="100%">
                                {pokemon.resistances
                                    ?.filter(resistance => resistance.multiplier < 1)
                                    .map((resistance, index) => (
                                        <Badge variant="solid" key={index} fontSize={{ base: "md", md: "lg" }}>
                                            {resistance.name}
                                        </Badge>
                                    ))}
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
                <DialogFooter backgroundColor={"gray.100"}>
                    <DialogActionTrigger asChild>
                        <Button variant="outline" colorPalette={"red"}>Fermer</Button>
                    </DialogActionTrigger>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}