import { useState, FormEvent } from "react";
import {
    SelectContent,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select";
import {createListCollection, Select, Span, Stack} from "@chakra-ui/react";

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
            size="md"
            width="200px"
            // @ts-ignore
            value={selectedGen}
            onChange={handleChange}
            >
                <SelectTrigger>
                    <SelectValueText  placeholder="Sélectionner une génération" />
                </SelectTrigger>
                <SelectContent>
                    {generation.items.map((gen) => (
                        <Select.Item item={gen} key={gen.value}>
                            <Stack gap="0">
                                <Select.ItemText>{gen.label}</Select.ItemText>
                                <Span color="fg.muted" textStyle="xs">
                                    {gen.description}
                                </Span>
                            </Stack>
                            <Select.ItemIndicator />
                        </Select.Item>
                    ))}
                </SelectContent>
            </SelectRoot>
    );
}

const generation = createListCollection({
    items: [
        { label: "Région de Kanto", value: "1", description: "1er Génération" },
        { label: "Région de Johto", value: "2", description: "2eme génération"  },
        { label: "Région de Hoenn", value: "3", description: "3eme génération"  },
        { label: "Région de Sinnoh", value: "4", description: "4eme Génération"  },
        { label: "Région d’ Unys", value: "5", description: "5eme Génération"  },
        { label: "Région de Kalos", value: "6", description: "6eme Génération"  },
        { label: "Région d’Alola", value: "7", description: "7eme Génération"  },
        { label: "Région de Galar", value: "8", description: "8eme Génération"  },
        { label: "Région de Paldea", value: "9", description: "9eme Génération"  },
    ],
});
