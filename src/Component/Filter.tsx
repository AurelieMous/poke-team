export default function Filter() {
    return('Filter');
}

// Il faut que cette fonction affiche sous forme de checkbox (avec pas plus de 2 selections)
// Peut être sur une popover
// Avec appel API /types/${type} pour afficher les pokemons
// Accès au tableau pokemons avec un map sur les pokemon du tableau name.fr
// Pour afficher les filtres sur la checkbox il faut les filtrer /types afin
// de tous les afficher et éviter de le faire à la main.