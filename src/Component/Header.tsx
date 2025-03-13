import logo from '../assets/logo.png';
import {Box, Button, Flex, Heading, Image} from "@chakra-ui/react"
import {Link, useNavigate} from "react-router";

export default function Header(){
    const navigate = useNavigate();



    return (
        <>
            <Box position="fixed" top="0" width="100%" bg="orange.emphasized" zIndex="1000" boxShadow="md">
                <Flex alignItems="center" justifyContent="space-between" pr={"8"}>
                    <Flex alignItems="center">
                        <Image
                            src={logo}
                            height="100px"
                        />
                        <Link to={'/'} >
                            <Heading size="3xl">PokeTeam!</Heading>
                        </Link>
                    </Flex>
                    <Flex gap={5} pr={10}>
                        <Button onClick={() => navigate('/list')} variant={"ghost"} colorPalette={"gray"}>
                            <Heading size="xl">Liste des Pokémons</Heading>
                        </Button>
                        <Button onClick={() => navigate('/team')} variant={"ghost"} colorPalette={"gray"}>
                            <Heading size="xl">Mon équipe</Heading>
                        </Button>
                        <Button onClick={() => navigate('/about')} variant={"ghost"} colorPalette={"gray"}>
                            <Heading size="xl">A propos</Heading>
                        </Button>
                    </Flex>
                </Flex>
            </Box>

        </>
    )
}