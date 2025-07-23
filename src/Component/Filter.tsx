import {TypeList} from "@/@types/Type";
import {Badge, Button, Flex, Image} from "@chakra-ui/react"
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import {FaFilter} from "react-icons/fa";

interface TypesProps {
    types: TypeList[],
    searchPokeWithType: (typesName : string) => void;
}

export default function Filter({types, searchPokeWithType}: TypesProps) {

    const [open, setOpen] = useState(false)

    const handleType = (selectedType: string) => {
        // Appel de la fonction du parent avec le type sélectionné
        searchPokeWithType(selectedType);
    };

    return(
        <>
                <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)} >
                    <PopoverTrigger asChild>
                        <Button size="md" variant="outline">
                            <FaFilter />
                            Filtrer par types
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>
                            <Flex gap='2' wrap='wrap'>
                                {types.map((type, index) => (
                                    <Button bg={"bg.subtle"} size="sm" key={index} onClick={() => handleType(type.name.fr)} colorPalette={"gray"} variant={"outline"}>
                                        <Badge key={index} colorScheme="teal">
                                            <Image
                                                objectFit="cover"
                                                maxW="20px"
                                                src={type.sprites}
                                                alt={type.name.fr}
                                            />
                                        </Badge>
                                        {type.name.fr}
                                    </Button>
                                ))}
                            </Flex>
                        </PopoverBody>
                    </PopoverContent>
                </PopoverRoot>
        </>
    )
}

// Il faut que cette fonction affiche sous forme de checkbox (avec pas plus de 2 selections)
// Peut être sur une popover
// Avec appel API /types/${type} pour afficher les pokemons
// Accès au tableau pokemons avec un map sur les pokemon du tableau name.fr
// Pour afficher les filtres sur la checkbox il faut les filtrer /types afin
// de tous les afficher et éviter de le faire à la main.