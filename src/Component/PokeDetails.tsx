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

interface IPokeDetailsProps {
    pokemon: IPokemon;
}

export default function PokeDetails({pokemon}: IPokeDetailsProps) {
    const [open, setOpen] = useState(false)
    return (
        <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)} size="lg">
            <DialogTrigger asChild>
                <Button colorPalette={"yellow"} variant="surface">
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
                    <Flex direction="column" alignItems="center">
                        <Flex direction="row" gap="28">
                            <Heading as="h2" fontSize="md">Forme normale</Heading>
                            <Heading as="h2" fontSize="md">Forme Shiny</Heading>
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
                        <Heading>{pokemon.name.fr} - {pokemon.name.jp}</Heading>
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
                    </Flex>

                    <Tabs.Root defaultValue="stats" variant={"line"} pt="5">
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
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="stats">
                            <HStack fontSize="md">
                                <FaHeart /> {pokemon.stats.hp}
                            </HStack>
                            <HStack fontSize="md">
                                <LuSwords /> {pokemon.stats.atk}
                            </HStack>
                            <HStack fontSize="md">
                                <FaShieldAlt /> {pokemon.stats.def}
                            </HStack>
                            <HStack fontSize="md">
                                <FaShieldAlt /><FaRegStar/> {pokemon.stats.spe_atk}
                            </HStack>
                            <HStack fontSize="md">
                                <FaShieldAlt /><FaRegStar/> {pokemon.stats.spe_def}
                            </HStack>
                            <HStack fontSize="md">
                                <IoSpeedometerOutline /> {pokemon.stats.vit}
                            </HStack>
                        </Tabs.Content>
                        <Tabs.Content value="resistances">
                            {pokemon.resistances.map((resistance) => (
                                <Text fontSize="md">
                                    {resistance.name} : x{resistance.multiplier}
                                </Text>
                            ))}
                        </Tabs.Content>
                        <Tabs.Content value="capacity">
                            {pokemon.talents.map((talent) => (
                                <Text fontSize="md">
                                    {talent.name}
                                </Text>
                            ))}
                        </Tabs.Content>
                        <Tabs.Content value="evolutions">
                            {pokemon.evolution.next ? (
                                pokemon.evolution.next.map((evolution) => (
                                        <Text fontSize="md">{evolution.name} - #{evolution.pokedex_id}</Text>
                                    ))
                            ) : (
                                <Text fontSize="md">Pas d'évolution disponible</Text>
                            )}
                        </Tabs.Content>
                    </Tabs.Root>

                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Fermer</Button>
                    </DialogActionTrigger>
                    <Button colorPalette={"green"} variant="surface">
                        <IoAddCircleOutline />
                        Ajouter à l'équipe
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}