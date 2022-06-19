import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

const getPokemonByName = (name) => axios.get(`${baseURL}pokemon/${name}`).then(
    res => res.data
)
const getPokemonByType = (type) => axios.get(`${baseURL}type/${type}`).then(
    res => res.data.pokemon.map(n => n.pokemon.name));
export { getPokemonByName, getPokemonByType }