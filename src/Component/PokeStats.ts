import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";

export default function PokeStats() {
    const totalHp = useSelector((state: RootState) => state.team.totalHp);

    return ("Statistiques de l'équipe");
}