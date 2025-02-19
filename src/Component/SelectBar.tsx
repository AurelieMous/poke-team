import { useState, FormEvent } from "react";
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select";
import {createListCollection} from "@chakra-ui/react";

export default function SelectBar({ onChange }: { onChange: (value: string) => void }) {
    const [selectedGen, setSelectedGen] = useState("1");

    // Adaptation du handleChange pour gérer l'événement
    const handleChange = (event: FormEvent<HTMLDivElement>) => {
        const value = (event.target as HTMLSelectElement).value;
        setSelectedGen(value);
        onChange(value);
    };

    // @ts-ignore
    return (
        <SelectRoot
            collection={generation}
            size="sm"
            width="320px"
            // @ts-ignore
            value={selectedGen}
            onChange={handleChange}
        >
            <SelectLabel>Génération de Pokémon</SelectLabel>
            <SelectTrigger>
                <SelectValueText placeholder="Sélectionner une génération" />
            </SelectTrigger>
            <SelectContent>
                {generation.items.map((gen) => (
                    <SelectItem item={gen} key={gen.value}>
                        {gen.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    );
}

const generation = createListCollection({
    items: [
        { label: "Génération 1", value: "1" },
        { label: "Génération 2", value: "2" },
        { label: "Génération 3", value: "3" },
        { label: "Génération 4", value: "4" },
        { label: "Génération 5", value: "5" },
        { label: "Génération 6", value: "6" },
        { label: "Génération 7", value: "7" },
        { label: "Génération 8", value: "8" },
        { label: "Génération 9", value: "9" },
    ],
});
