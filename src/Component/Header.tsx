import logo from '../assets/logo.png';
import {Flex, Heading, Image} from "@chakra-ui/react"
import {Link} from "react-router";

export default function Header(){
    return (
        <>
            <Flex alignItems="center">
                <Image
                    src={logo}
                    height="100px"
                />
                <Link to="/">
                    <Heading size="3xl">PokeTeam!</Heading>
                </Link>
            </Flex>

        </>
    )
}