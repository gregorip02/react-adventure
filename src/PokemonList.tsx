import { useState, useEffect } from "react";
import { pokeapi } from "./services";
import { Pokemon } from "./services/pokeapi";

export const PokemonList = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        pokeapi.paginate().then(setPokemons);
    }, []);

    return <div>
        {pokemons.map(({ name, url }) => (
            <div key={url}>
                <a href={url}>{name}</a>
            </div>
        ))}
    </div>
};
