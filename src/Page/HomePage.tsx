import {useNavigate} from "react-router";
import {Box, Button, Card, Container, Flex, Heading} from "@chakra-ui/react";
import {FaLongArrowAltRight} from "react-icons/fa";


export default function HomePage(){

    const navigate = useNavigate();

    const handleClickList = () => {
        navigate('/list');
    }
    const handleTeamList = () => {
        navigate('/team');
    }


    return(
            <Container fluid pt={200}
                       display="flex"
                       alignItems="center"
                       justifyContent="center"
                       bgImage={"../assets/pixel_home.png"}

            >
            <Card.Root size="lg" maxW={"4xl"}>
                <Card.Header>
                    <Heading size="5xl" textAlign="center" mb={2} >
                            Bienvenue dresseur de Pokémon!
                    </Heading>
                </Card.Header>
                <Card.Body color="fg.muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
                    <Flex justifyContent="center" alignItems="center" gap="10">
                        <Button colorPalette={"orangePerso"} variant="subtle" onClick={handleClickList}>
                            Liste des Pokémons
                        </Button>
                        <Button colorPalette={"bluePerso"} variant="subtle" onClick={handleTeamList}>
                            Voir mon équipe
                        </Button>
                    </Flex>
                </Card.Body>
            </Card.Root>
            </Container>
        )

}