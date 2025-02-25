import TeamList from "@/Component/TeamList.tsx";
import {Container, Heading, Highlight} from "@chakra-ui/react";

export default function TeamPage() {
    return (
        <>
            <Container fluid>
                <Heading size="5xl" textAlign="center" pb="10">
                    <Highlight query="Pokémon" styles={{ px: "0.5", bg: "yellow.300", color: "yellow.fg" }}>
                        Mon équipe de Pokémon
                    </Highlight>
                </Heading>
                <TeamList/>
            </Container>
        </>
    )
}