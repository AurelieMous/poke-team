import {createSystem, defaultConfig, defineConfig} from "@chakra-ui/react"

const customConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                orangePerso: {
                    50: {value: "#FFEEBD"},
                    100: {value: "#EEBD8B"},
                    200: {value: "#F6BD5A"},
                    300: {value: "#EE9C39"},
                    400: {value: "#DE7339"},
                    500: {value: "#AC8B41"},
                    950: {value: "#613218"},
                },
                bluePerso: {
                    50: {value: "#fff"},
                    100: {value: "#20A47B"},
                    200: {value: "#186A62"},
                }
            },
            fonts: {
                body: { value: "system-ui, sans-serif" },
            }
        },
        semanticTokens: {
            colors: {
                orangePerso: {
                    solid: {value: "{colors.orangePerso.200}"},
                    contrast: {value: "{colors.bluePerso.50}"},
                    fg: {value: "{colors.orangePerso.700}"},
                    muted: {value: "{colors.orangePerso.100}"},
                    subtle: {value: "{colors.orangePerso.200}"},
                    emphasized: {value: "{colors.orangePerso.200}"},
                    focusRing: {value: "{colors.orangePerso.500}"},
                },
                bluePerso: {
                    solid: {value: "{colors.bluePerso.100}"},
                    contrast: {value: "{colors.bluePerso.50}"},
                    fg: {value: "{colors.orangePerso.50}"},
                    muted: {value: "{colors.bluePerso.100"},
                    subtle: {value: "{colors.bluePerso.100}"}, // fond du bouton
                    emphasized: {value: "{colors.bluePerso.100}"},
                    focusRing: {value: "colors.bluePerso.100"},
                },
            },
        },
    },
})


export const system = createSystem(defaultConfig, customConfig);
