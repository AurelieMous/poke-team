import {useNavigate} from "react-router";
import {Button, Container, Flex, Heading} from "@chakra-ui/react";
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
            <Container fluid pt={200}>
                <Heading size="5xl" textAlign="center" pb="10">
                        Bienvenue dresseur de Pokémon!
                </Heading>
                <Container maxW="xl" pt="10" pb="10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
                </Container>
                <Flex justifyContent="center" alignItems="center" gap="10">
                    <Button colorPalette={"green"} variant="surface" onClick={handleClickList}>
                        Liste des Pokémons <FaLongArrowAltRight />
                    </Button>
                    <Button colorPalette={"yellow"} variant="surface" onClick={handleTeamList}>
                        Voir mon équipe
                    </Button>
                    <Button colorPalette={"yellow"} variant="surface">
                        Autre option
                    </Button>
                </Flex>
            </Container>
        )

}