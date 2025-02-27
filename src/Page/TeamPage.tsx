import TeamList from "@/Component/TeamList.tsx";
import {Container, Flex, Heading, Highlight} from "@chakra-ui/react";
import PokeStats from "@/Component/PokeStats";

export default function TeamPage() {

    return (
        <>
            <Container fluid pt={200}>
                <Flex flexDirection="column" justifyContent="center" alignItems="center" gap={5} pb={"10"}>
                    <Heading size="5xl">
                        <Highlight query="Pokémon" styles={{ px: "0.5", bg: "yellow.300", color: "yellow.fg" }}>
                            Mon équipe de Pokémon
                        </Highlight>
                    </Heading>
                </Flex>
                <TeamList/>
                <PokeStats/>
            </Container>
        </>
    )
}