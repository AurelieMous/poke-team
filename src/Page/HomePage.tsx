import {useNavigate} from "react-router";
import {Box, Button, Card, Container, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import pixelHome from "../../public/pixel_home.png";
import { motion } from "framer-motion";

export default function HomePage(){

    const navigate = useNavigate();
    const MotionCard = motion(Card.Root);

    const handleClickList = () => {
        navigate('/list');
    }
    const handleTeamList = () => {
        navigate('/team');
    }

    return(
            <Container
                maxW="100vw"
                minH="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgImage={`url(${pixelHome})`}
                bgSize="cover"
                bgRepeat="no-repeat"
            >
                <MotionCard
                    size="lg"
                    maxW="4xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    borderColor="orange.950"
                >
                <Card.Header>
                    <Heading size="5xl" textAlign="center" mb={2} >
                            Bienvenue dresseur de Pokémon!
                    </Heading>
                </Card.Header>
                <Card.Body color="fg.muted">
                    <HStack pb={5}>
                        Tu rêves de tout savoir sur tous les Pokémon ? De créer ton équipe parfaite et de découvrir les
                        forces et faiblesses de chaque créature ? Notre application est faite pour toi !
                    </HStack>
                    <Heading size="xl" mb={2}>
                        Un Pokédex complet
                    </Heading>
                    <HStack pb={2}>
                        Ici, tu trouveras tous les Pokémon de toutes les générations ! Chaque Pokémon a sa propre fiche avec :
                    </HStack>

                    <Box as={"ul"} pb={5}>
                        <li>- Ses caractéristiques (vie, puissance, vitesse…),</li>
                        <li>- Ses forces et faiblesses contre les autres types,</li>
                        <li>- Ses évolutions,</li>
                        <li>- Tout plein d’infos amusantes et utiles !</li>
                    </Box>

                    <Heading size="xl" mb={2} >
                        Construit ton équipe !
                    </Heading>
                    <HStack pb={2}>
                        Avec notre application, tu peux :
                    </HStack>
                    <Box as={"ul"} pb={5}>
                        <li>- Choisir tes 6 Pokémon préférés pour créer ton équipe</li>
                        <li>- Voir s’ils se complètent bien ensemble</li>
                        <li>- Trouver la meilleure stratégie pour les combats</li>
                        <li>- Tout plein d’infos amusantes et utiles !</li>
                    </Box>
                    <Heading size="xl" mb={2} >
                        Deviens un Vrai Maître Pokémon !
                    </Heading>
                    <HStack pb={2}>
                        Que tu sois un fan de Pikachu, un expert en combats ou un curieux qui veut tout savoir, notre
                        Pokédex t’aidera à progresser et à mieux comprendre chaque Pokémon !
                    </HStack>
                    <HStack pb={2}>
                        Prêt à commencer l’aventure ? Ouvre vite l’application et explore le monde des Pokémon !
                    </HStack>
                    <Text fontSize="xl" fontWeight="bold" textAlign={"center"} mt={2} mb={2}>
                        Attrapez-les tous !
                    </Text>

                    <Flex justifyContent="center" alignItems="center" gap="10" pt="5">
                        <Button colorPalette={"orangePerso"} onClick={handleClickList}>
                            Liste des Pokémons
                        </Button>
                        <Button colorPalette={"bluePerso"} onClick={handleTeamList}>
                            Voir mon équipe
                        </Button>
                    </Flex>
                </Card.Body>
                </MotionCard>
            </Container>
        )

}