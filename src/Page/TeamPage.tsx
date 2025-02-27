import TeamList from "@/Component/TeamList.tsx";
import {Button, Container, Flex, Heading, Highlight} from "@chakra-ui/react";
import PokeStats from "@/Component/PokeStats";
import {useNavigate} from "react-router";

export default function TeamPage() {

    const navigate = useNavigate();

    const navigateToPokeList = () => {
        navigate('/list')
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
                    <Button onClick={navigateToPokeList}>
                        Liste des Pokémons
                    </Button>
                </Flex>
                <TeamList/>
                <PokeStats/>
            </Container>
        </>
    )
}