import './DisplayPage.css'
import { useParams } from 'react-router-dom';
import './DisplayPage.css';
import { useEffect, useLayoutEffect } from 'react';
import { getPokemonByName } from '../../api';
import { useState } from 'react';
import Graph from '../../components/Graph/Graph';
import Details from '../../components/Details/Details';

export default function DisplayPage() {
    const [pokemon, setPokemon] = useState();
    const [pokemonStats, setPokemonStats] = useState();
    const [pokemonDetails, setPokemonDetails] = useState();

    const { id } = useParams();

    useEffect(() => {
        FetchPokemon();
        async function FetchPokemon() {
            await getPokemonByName(id).then(res => updatePokemon(res));
        }
    }, [])

    function updatePokemon(pokemon) {
        setPokemon(pokemon);
        const newStats = pokemon.stats.map((st) => { return { 'name': st.stat.name, 'val': st.base_stat } });
        setPokemonStats(newStats);
        const newPokemonDetails = {
            'name': pokemon.name,
            'type': pokemon.types,
            'games': pokemon.game_indices,
            'moves': pokemon.moves
        }

        setPokemonDetails(newPokemonDetails);
    }


    return <div className='DisplayPage'>
        <div className='display-image-container'>
            {pokemon ? <img src={`${pokemon.sprites.other.home.front_default}`}></img> : <div></div>}
            {pokemonStats ? <Graph details={pokemonStats} /> : <div></div >}
        </div>

        <div className='display-stat-container'>
            {pokemonDetails ? <Details details={pokemonDetails} /> : <div></div>}
        </div>
    </div>
}