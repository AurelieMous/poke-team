import {Flex, Heading, HStack} from "@chakra-ui/react";
import {FaHeart} from "react-icons/fa";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";

export default function PokeStats() {
    const totalHp = useSelector((state: RootState) => state.team.totalHp);

    return (
        <>
            <Flex flexDirection="column" alignItems="center">
                <Heading>Statistiques de l'équipe</Heading>
                <HStack fontSize="md">
                    <FaHeart /> {totalHp}
                </HStack>
            </Flex>

        </>
    );
}