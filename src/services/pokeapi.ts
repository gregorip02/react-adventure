const uri = 'https://pokeapi.co/api/v2';

export interface Pokemon {
    name: string;
    url: string;
}

export const paginate = async (): Promise<Pokemon[]> => {
    const res = await fetch(`${uri}/pokemon`);
    const jsn = await res.json();
    return jsn.results || [];
};
