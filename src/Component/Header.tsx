import logo from '../assets/logo.png';
import {Box, Flex, Heading, Image, Link} from "@chakra-ui/react"

export default function Header(){

    return (
        <>
            <Box position="fixed" top="0" width="100%" bg="gray.200" zIndex="1000" boxShadow="md">
                <Flex alignItems="center" justifyContent="space-between" pr={"8"}>
                    <Flex alignItems="center">
                        <Image
                            src={logo}
                            height="100px"
                        />
                        <Link href={'/'} >
                            <Heading size="3xl">PokeTeam!</Heading>
                        </Link>
                    </Flex>
                    <Flex gap={5} pr={10}>
                        {/* Actualise la poage et donc renitialise le state donc à modifier*/}
                        <Link href={'/list'} variant={"plain"}>
                            <Heading size="xl">Liste des Pokémons</Heading>
                        </Link>
                        <Link href={'/team'} variant={"plain"}>
                            <Heading size="xl">Mon équipe</Heading>
                        </Link>
                        <Link href={'/about'} variant={"plain"}>
                            <Heading size="xl">A propos</Heading>
                        </Link>
                    </Flex>
                </Flex>
            </Box>

        </>
    )
}