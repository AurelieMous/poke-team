import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {Button, Image} from "@chakra-ui/react";


export default function TeamList() {

    const dispatch = useDispatch();
    const team = useSelector((state: RootState) => state.team.pokemonsTeams);


    return (
        <>
            <ul>
                {team.map((pokemon) => (
                    <li key={pokemon.pokedex_id}>
                        <Image
                            maxW="250px"
                            src={pokemon.sprites.regular}
                            alt={pokemon.name.fr}
                        />
                        # {pokemon.pokedex_id} - {pokemon.name.fr}
                        <Button>Retirer</Button>
                    </li>
                ))}
            </ul>
        </>
    )
}