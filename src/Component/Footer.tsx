import {Container, Heading} from "@chakra-ui/react";

export default function Footer(){

    const today = new Date();
    const year = today.getFullYear();

    return (
            <Container fluid pt="10" bg="orangePerso.100">
                <Heading size="sm" textAlign="center" pb={"5"}>
                    {year}, Aurélie Moustardier, made with Love.
                </Heading>
            </Container>
    )
}