import logo from '../assets/logo.png';
import {Flex, Heading, Image} from "@chakra-ui/react"

export default function Header(){
    return (
        <>
            <Flex alignItems="center">
                <Image
                    src={logo}
                    height="100px"
                />
                <Heading size="3xl">PokeTeam!</Heading>
            </Flex>

        </>
    )
}