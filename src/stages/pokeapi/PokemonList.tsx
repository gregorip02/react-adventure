import { useState, useEffect } from "react";
import { Pokemon, paginate } from "./service";

export const PokemonList = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        paginate().then(setPokemons);
    }, []);

    return <div>
        {pokemons.map(({ name, url }) => (
            <div key={url}>
                <a href={url}>{name}</a>
            </div>
        ))}
    </div>
};
