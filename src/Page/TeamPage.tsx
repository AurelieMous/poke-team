import TeamList from "@/Component/TeamList.tsx";
import {Button, Container, Flex, Heading, Highlight} from "@chakra-ui/react";
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
            <Container fluid pt={200}>
                <Flex flexDirection="column" justifyContent="center" alignItems="center" gap={5} pb={"10"}>
                    <Heading size="5xl">
                        <Highlight query="Pokémon" styles={{ px: "0.5", bg: "yellow.300", color: "yellow.fg" }}>
                            Mon équipe de Pokémon
                        </Highlight>
                    </Heading>
                    {team.length > 0 && (
                        <Button onClick={handlerRemoveAllPokemons} variant="outline" size="xl" colorPalette={"red"}>
                            Supprimer toute l'équipe
                        </Button>
                    )}

                </Flex>
                <Flex justifyContent="space-around" gap={30} pb="10">
                    <TeamList />
                    <PokeStats />
                </Flex>
            </Container>
        </>
    )
}