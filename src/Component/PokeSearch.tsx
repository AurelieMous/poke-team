import {Button, Flex, Input} from "@chakra-ui/react";
import {BiSearch} from "react-icons/bi";
import {useState} from "react";

interface PokeSearchProps {
    onSearch: (searchTerm: string) => void;
}

export default function PokeSearch({onSearch}: PokeSearchProps) {

    const [search, setSearch] = useState<string>("");

    // Fonction de recherche avec le props du composant parent (PokeListPage.tsx)
    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setSearch(value);
        onSearch(value);
    };

    // rénitialisation de la barre de recherche
    const clearSearch = () => {
        setSearch("");
        onSearch("");
    };

    return (
        <div>
            <Flex alignItems="center" justifyContent="center" pb="4" gap="1">
                <Input
                    placeholder="Rechercher"
                    size="md"
                    width="xl"
                    value={search}
                    onChange={searchHandler}
                />
                <Button size="md" variant="surface" colorPalette="yellow" onClick={clearSearch}>
                    <BiSearch />
                </Button>
            </Flex>
        </div>
    )
}