import {useNavigate} from "react-router";
import {Button, Card, Container, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {useColorModeValue} from "@/components/ui/color-mode.tsx";

export default function HomePage(){

    const navigate = useNavigate();
    const MotionCard = motion(Card.Root);

    const handleClickList = () => {
        navigate('/list');
    }
    const handleTeamList = () => {
        navigate('/team');
    }
    const imageSrc = useColorModeValue("../../public/img_home_light.png", "../../public/img_home_dark.png")

    return(
            <Container
                pt={"40"}
                pb={"32"}
                maxW="100vw"
                minH="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgImage={`url(${imageSrc})`}
                bgSize="cover"
                bgRepeat="no-repeat"
            >
                <MotionCard
                    size="lg"
                    maxW="4xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    borderColor="border.emphasized"
                >
                <Card.Header>
                    <Heading size="5xl" textAlign="center" mb={2} >
                            Bienvenue dresseur de Pokémon!
                    </Heading>
                </Card.Header>
                <Card.Body color="fg.muted">

                    <HStack pb={2}>
                        Ici, tu trouveras tous les Pokémon de toutes les générations ! Chaque Pokémon a sa propre fiche avec
                        ses caractéristiques (vie, puissance, vitesse…), ses forces et faiblesses contre les autres types,
                        ses évolutions, ses formes shiny...
                    </HStack>
                    <HStack pb={2}>
                        Tu peux construire ton équipe et consulter leurs statistiques de combat afin de trouver la meilleure
                        stratégie et équipe qui soit !
                    </HStack>
                    <Text fontSize="xl" fontWeight="bold" textAlign={"center"} mt={2} mb={2}>
                        Attrapez-les tous !
                    </Text>

                    <Flex justifyContent="center" alignItems="center" gap="10" pt="5">
                        <Button colorPalette={"blue"} onClick={handleClickList} variant="subtle" size="xl">
                            Liste des Pokémons
                        </Button>
                        <Button colorPalette={"green"} onClick={handleTeamList} variant="subtle" size="xl">
                            Voir mon équipe
                        </Button>
                    </Flex>
                </Card.Body>
                </MotionCard>
            </Container>
        )

}