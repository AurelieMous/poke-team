import logo from '../assets/logo.png';
import {Box, Button, Flex, Heading, Image, Menu, MenuItem, Portal} from "@chakra-ui/react"
import {Link, useNavigate} from "react-router";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Header(){
    const navigate = useNavigate();
    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <>
            <Box position="fixed" top="0" width="100%" bg="orangePerso.100" zIndex="1000" boxShadow="md">
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
                        {isMobile ? (
                            <Menu.Root>
                                <Menu.Trigger asChild>
                                    <Button size="lg" colorPalette={"orangePerso"} variant={"ghost"}>
                                        ☰ Menu
                                    </Button>
                                </Menu.Trigger>
                                <Portal>
                                    <Menu.Positioner>
                                        <Menu.Content>
                                            <MenuItem fontSize={"xl"} value={"middle"} onClick={() => navigate('/list')}>
                                                Liste des Pokémons
                                            </MenuItem>
                                            <Menu.Item fontSize={"xl"} value={"middle"} onClick={() => navigate('/team')}>Mon équipe</Menu.Item>
                                            <Menu.Item fontSize={"xl"} value={"middle"} onClick={() => navigate('/about')}>À propos</Menu.Item>
                                        </Menu.Content>
                                    </Menu.Positioner>
                                </Portal>
                            </Menu.Root>
                        ) : (
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
                        )
                        }
                </Flex>
            </Box>

        </>
    )
}