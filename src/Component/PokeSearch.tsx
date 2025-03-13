import { Button, Flex, Input } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import {RiResetLeftFill} from "react-icons/ri";

type PokeSearchProps = {
    onSearch: (pokemonName: string) => void;
    onReset: () => void;
};

export default function PokeSearch({ onSearch, onReset }: PokeSearchProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const handlePokemon = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim() !== "") {
            onSearch(searchTerm);
            setSearchTerm(""); // Reset après soumission
        }
    };

    // rénitialisation de la recherche
    const handleReset = () => {
        setSearchTerm("");
        onReset();
    }

    return (
        <div>
            <Flex alignItems="center" justifyContent="center">
                <form onSubmit={handlePokemon}>
                    <Input
                        type="text"
                        name="searchPokemon"
                        id="searchPokemon"
                        placeholder="Rechercher un Pokémon"
                        size="md"
                        width="xl"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button type="submit" size="md" colorPalette="blue">
                        <BiSearch />
                    </Button>
                    <Button type="submit" size="md" colorScheme="green" onClick={handleReset}>
                        <RiResetLeftFill />
                    </Button>
                </form>
            </Flex>
        </div>
    );
}
