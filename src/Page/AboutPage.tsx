import {Card, Flex, Heading, HStack, Link} from "@chakra-ui/react";


export default function AboutPage(){
    return (
        <>
            <Flex minH="100vh" justifyContent="center" alignItems="center" flexDirection="column" gap={2}>
                <Heading size="3xl" mb={2} textAlign={"center"}>
                    A propos de l'application
                </Heading>
                <Card.Root>
                    <Card.Body>
                        <HStack mt={2} mb={2}>
                            Crée à l'aide de l'API Française
                            <Link href="https://tyradex.vercel.app/" color={"blue"} variant={"plain"}>
                                Tyradex
                            </Link> en open-source.
                        </HStack>
                        <HStack mt={2} mb={2}>
                            Application créée par Aurélie, tous droits réservés.
                        </HStack>
                        <HStack mt={2} mb={2}>
                            Lien
                            <Link href="https://github.com/AurelieMous" color={"blue"} variant={"plain"}>
                                GitHub
                            </Link>
                        </HStack>
                    </Card.Body>
                </Card.Root>
            </Flex>
        </>
    )
}