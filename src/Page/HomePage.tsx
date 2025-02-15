import {Link} from "react-router";

export default function HomePage(){
    return(
        <div>
            <h1> Home Page </h1>
            <Link to={"/list"}>Liste des Pokémons</Link>
        </div>
        )

}