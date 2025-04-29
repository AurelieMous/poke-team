import {Container, Heading} from "@chakra-ui/react";

export default function Footer(){

    const today = new Date();
    const year = today.getFullYear();

    return (
            <Container fluid bg="bg.subtle">
                <Heading size="sm" textAlign="center" pt={"5"} pb={"5"}>
                    {year}, Aurélie Moustardier, made with Love.
                </Heading>
            </Container>
    )
}