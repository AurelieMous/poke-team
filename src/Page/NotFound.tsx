import Header from "@/Component/Header.tsx";
import {Button, Container, Flex, Heading} from "@chakra-ui/react";
import Footer from "@/Component/Footer.tsx";
import {useNavigate} from "react-router";

export default function NotFound() {
    const navigate = useNavigate();

    const handleMenu = () => {
        navigate("/list");
    }
    return (
        <>
            <Header />
            <Container maxW="md" height="100vh">
                <Flex direction="column" justifyContent="center" alignItems="center" height="100%">
                    <Heading size="5xl" textAlign="center" mb={4}>
                        Erreur 404
                    </Heading>
                    <Heading size="3xl" textAlign="center" mb={4}>
                        Pokémon ou page non trouvé
                    </Heading>
                    <Button onClick={handleMenu} colorPalette={"blue"}>Retour à la liste des Pokemons</Button>
                </Flex>
            </Container>
            <Footer />

        </>

    )
}