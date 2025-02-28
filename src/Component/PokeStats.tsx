import {Flex, Heading, HStack} from "@chakra-ui/react";
import {FaHeart, FaShieldAlt} from "react-icons/fa";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {LuSwords} from "react-icons/lu";

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
            <Flex flexDirection="column" alignItems="center" p={38} border={"sm"} bg={"gray.100"}>
                <Heading size={"3xl"} pb={10}>Statistiques de l'équipe</Heading>
                {team.length > 0 ?(
                    <Flex flexDirection="column" alignItems="center">
                        <HStack fontSize="md">
                            <FaHeart /> {totalHp}
                        </HStack>
                        <HStack fontSize="md">
                            <LuSwords /> {totalAtk}
                        </HStack>
                        <HStack fontSize="md">
                            <FaShieldAlt /> {totalDef}
                        </HStack>
                        <HStack fontSize="md">
                            <FaShieldAlt /> {totalSpeAtk}
                        </HStack>
                        <HStack fontSize="md">
                            <FaShieldAlt /> {totalSpeDef}
                        </HStack>
                        <HStack fontSize="md">
                            <FaShieldAlt /> {totalSpeed}
                        </HStack>
                    </Flex>
                ):(
                    <Heading>indisponibles</Heading>
                )}
            </Flex>
        </>
    );
}