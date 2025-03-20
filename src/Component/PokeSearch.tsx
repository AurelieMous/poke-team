import {Button, Flex, Input, useBreakpointValue} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import {RiResetLeftFill} from "react-icons/ri";

type PokeSearchProps = {
    onSearch: (pokemonName: string) => void;
    onReset: () => void;
};

export default function PokeSearch({ onSearch, onReset }: PokeSearchProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const isMobile = useBreakpointValue({ base: true, sm: false });

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
                        w={{ base: "100%", sm: "xs", md: "sm", lg: "md", xl: "xl" }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {!isMobile && (
                        <>
                            <Button type="submit" size="md" colorPalette="blue" variant="subtle">
                                <BiSearch />
                            </Button>
                            <Button type="submit" size="md" colorPalette="gray" variant="subtle" onClick={handleReset}>
                                <RiResetLeftFill />
                            </Button>
                        </>
                    )}

                </form>
            </Flex>
        </div>
    );
}
