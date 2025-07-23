import {Card, Flex, Heading, HStack, Span} from "@chakra-ui/react";
import {FaHeart, FaRegStar, FaShieldAlt} from "react-icons/fa";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {LuSwords} from "react-icons/lu";
import {IoSpeedometerOutline} from "react-icons/io5";

export default function PokeStats() {

    const team = useSelector((state: RootState) => state.team.pokemonsTeams);
    const totalHp = useSelector((state: RootState) => state.team.totalHp);
    const totalAtk = useSelector((state: RootState) => state.team.totalAtk);
    const totalDef = useSelector((state: RootState) => state.team.totalDef);
    const totalSpeAtk = useSelector((state: RootState) => state.team.totalSpeAtk);
    const totalSpeDef = useSelector((state: RootState) => state.team.totalSpeDef);
    const totalSpeed = useSelector((state: RootState) => state.team.totalSpeed);

    return (
        <>
            <Card.Root
                variant="elevated"
                width="320px"
                height="400px"
                minWidth="390px"
                minHeight="400px"
                flexShrink={0}
            >
                <Card.Body gap="2">
                    <Card.Title mt="2">
                        <Heading size={"3xl"} pb={10} textAlign={"center"}>Statistiques de l'équipe</Heading>
                    </Card.Title>
                        {team.length > 0 ?(
                            <Card.Description>
                                <Flex flexDirection="column" gap={"2"} alignItems="center">
                                    <HStack fontSize="md">
                                        Total des points de vie : {totalHp} points<Span color={"red"}><FaHeart /></Span>
                                    </HStack>
                                    <HStack fontSize="md">
                                        Total des points d'attaque : {totalAtk} points<Span color={"gray"}><LuSwords /></Span>
                                    </HStack>
                                    <HStack fontSize="md">
                                        Total des points de défense : {totalDef} points<Span color="blue"><FaShieldAlt /></Span>
                                    </HStack>
                                    <HStack fontSize="md">
                                        Total d'attaque spéciale : {totalSpeAtk} points
                                        <Span color={"gray"}><LuSwords /></Span>
                                        <Span color={"orange"}><FaRegStar/></Span>
                                    </HStack>
                                    <HStack fontSize="md">
                                        Total de la défense spé : {totalSpeDef} points
                                        <Span color="blue"><FaShieldAlt /></Span>
                                        <Span color={"orange"}><FaRegStar/></Span>

                                    </HStack>
                                    <HStack fontSize="md">
                                        Total de la vitesse d'attaque: {totalSpeed} points <Span color="fg"><IoSpeedometerOutline /></Span>
                                    </HStack>
                                </Flex>

                            </Card.Description>
                                    ):(
                                        <Heading>indisponibles</Heading>
                                    )}
                            </Card.Body>
                            <Card.Footer justifyContent="flex-end">
                            </Card.Footer>
                        </Card.Root>
        </>
    );
}