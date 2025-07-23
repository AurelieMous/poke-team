import logo from '../assets/logo.png';
import {Box, Button, Flex, Heading, Image, Menu, MenuItem, Portal} from "@chakra-ui/react"
import {Link, useNavigate} from "react-router";
import { useBreakpointValue } from "@chakra-ui/react";
import {ColorModeButton} from "@/components/ui/color-mode.tsx";

export default function Header(){
    const navigate = useNavigate();
    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <>
            <Box position="fixed" top="0" width="100%" bg="yellow.emphasized" zIndex="1000" boxShadow="md">
                <Flex alignItems="center" justifyContent="space-between" pr={"8"}>
                    <Flex alignItems="center">
                        <Image
                            src={logo}
                            boxSize={{ base: "50px", md: "90px", lg: "100px" }}
                            objectFit="contain"
                            alt="Logo PokeTeam"
                        />
                        <Link to={'/'} >
                            <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} colorPalette={"gray.solid"}>PokeTeam!</Heading>
                        </Link>
                    </Flex>
                    <Flex justifyContent="center" alignItems="center" gap={{base: "0.5", sm:"0.5", md: "1", lg: "2"}}>

                        {isMobile ? (
                            <Menu.Root>
                                <Menu.Trigger asChild>
                                    <Button size="2xl" colorPalette={"gray"} variant={"ghost"}>
                                        ☰ Menu
                                    </Button>
                                </Menu.Trigger>
                                <Portal>
                                    <Menu.Positioner>
                                        <Menu.Content>
                                            <Flex flexDirection="column" gap={"5"}>
                                                <MenuItem fontSize={"xl"} value={"middle"} onClick={() => navigate('/')}>
                                                    Liste des Pokémons
                                                </MenuItem>
                                                <Menu.Item fontSize={"xl"} value={"middle"} onClick={() => navigate('/team')}>
                                                    Mon équipe
                                                </Menu.Item>
                                                <Menu.Item fontSize={"xl"} value={"middle"} onClick={() => navigate('/about')}>
                                                    À propos
                                                </Menu.Item>
                                            </Flex>

                                        </Menu.Content>
                                    </Menu.Positioner>
                                </Portal>
                            </Menu.Root>
                        ) : (
                            <Flex gap={5} pr={10}>
                                <Button onClick={() => navigate('/')} variant={"ghost"} colorPalette={"yellow"}>
                                    <Heading size="xl">Liste des Pokémons</Heading>
                                </Button>
                                <Button onClick={() => navigate('/team')} variant={"ghost"} colorPalette={"yellow"}>
                                    <Heading size="xl">Mon équipe</Heading>
                                </Button>
                                <Button onClick={() => navigate('/about')} variant={"ghost"} colorPalette={"yellow"}>
                                    <Heading size="xl">A propos</Heading>
                                </Button>
                            </Flex>
                        )
                        }
                        <ColorModeButton />
                    </Flex>

                </Flex>
            </Box>

        </>
    )
}