import logo from '../assets/logo.png';
import {Button, Flex, Heading, Image} from "@chakra-ui/react"
import {Link, useNavigate} from "react-router";
import {CgPokemon} from "react-icons/cg";

export default function Header(){

    const navigate = useNavigate();

    const handleTeam = () => {
        navigate("/team");
    }

    return (
        <>
            <Flex alignItems="center" justifyContent="space-between" pr={"8"}>
                <Flex alignItems="center">
                    <Image
                        src={logo}
                        height="100px"
                    />
                    <Link to="/">
                        <Heading size="3xl">PokeTeam!</Heading>
                    </Link>
                </Flex>
                <Button onClick={handleTeam}>
                    Mon équipe
                    <CgPokemon/>
                </Button>
            </Flex>


        </>
    )
}