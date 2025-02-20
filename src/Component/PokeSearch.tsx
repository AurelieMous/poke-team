import { Button, Flex, Input } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

type PokeSearchProps = {
    onSearch: (pokemonName: string) => void;
};

export default function PokeSearch({ onSearch }: PokeSearchProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const handlePokemon = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim() !== "") {
            onSearch(searchTerm);
            setSearchTerm(""); // Reset après soumission
        }
    };

    return (
        <div>
            <Flex alignItems="center" justifyContent="center" pb="4" gap="1">
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
                    <Button type="submit" size="md" colorScheme="yellow">
                        <BiSearch />
                    </Button>
                </form>
            </Flex>
        </div>
    );
}
