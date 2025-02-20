import { useState, FormEvent } from "react";
import {
    SelectContent,
    SelectItem,
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
        { label: "1er Génération", value: "1" },
        { label: "2eme Génération", value: "2" },
        { label: "3eme Génération", value: "3" },
        { label: "4eme Génération", value: "4" },
        { label: "5eme Génération", value: "5" },
        { label: "6eme Génération", value: "6" },
        { label: "7eme Génération", value: "7" },
        { label: "8eme Génération", value: "8" },
        { label: "9eme Génération", value: "9" },
    ],
});
