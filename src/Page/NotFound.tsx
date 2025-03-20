import Header from "@/Component/Header.tsx";
import {Container, Flex, Heading, Link} from "@chakra-ui/react";
import Footer from "@/Component/Footer.tsx";

export default function NotFound() {
    return (
        <>
            <Header />
            <Container maxW="md" height="100vh">
                <Flex direction="column" justifyContent="center" alignItems="center" height="100%">
                    <Heading size="3xl" textAlign="center" mb={4}>
                        Pokémon non trouvé
                    </Heading>
                    <Link href="/list" color={"bluePerso.200"}>Retour à la liste des Pokemons</Link>
                </Flex>
            </Container>
            <Footer />

        </>

    )
}