import TeamList from "@/Component/TeamList.tsx";
import {Button, Container, Flex, Heading} from "@chakra-ui/react";
import PokeStats from "@/Component/PokeStats";
import {useAppDispatch} from "@/redux/hooks.ts";
import {resetTeam} from "@/redux/slices/team.slice.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";

export default function TeamPage() {

    const dispatch = useAppDispatch();
    const team = useSelector((state: RootState) => state.team.pokemonsTeams);

    const handlerRemoveAllPokemons = () => {
        dispatch(resetTeam());
    }

    return (
        <>
            <Container fluid pt={150} minH="100vh">
                <Flex flexDirection="column" justifyContent="center" alignItems="center" gap={5} pb={"10"}>
                    <Heading size="5xl">
                        Mon équipe de Pokemon
                    </Heading>
                    {team.length > 0 && (
                        <Button onClick={handlerRemoveAllPokemons} variant="outline" size="xl" colorPalette={"red"}>
                            Supprimer toute l'équipe
                        </Button>
                    )}
                </Flex>
                <Flex flexDirection={{ base: "column", lg: "row" }} justifyContent="center" alignItems="start" gap={10} pb={"5"}>
                    <TeamList />
                    {team.length > 0 && <PokeStats />}
                </Flex>
            </Container>
        </>
    )
}