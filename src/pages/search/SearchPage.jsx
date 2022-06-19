import './SearchPage.css'

import { useEffect } from 'react';
import { useState } from 'react';
import { getPokemonByName, getPokemonByType, getPokemonImage } from '../../api'
import CardGrid from '../../components/CardGrid/CardGrid';
import SearchForm from '../../components/SearchForm/SearchForm'
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';

export default function SearchPage() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState('');



    function handleSubmit(filter, filterQuery) {
        setPokemon([])
        setLoading('active');
        setTimeout(() => {
            switch (filter) {
                case 'name':
                    fetchPokemon([filterQuery]); break;

                case 'type': getPokemonByType(filterQuery).then
                    (res => fetchPokemon(res)); break;
            };

            setLoading('')
        }, 2000)

    }
    async function fetchPokemon(pokemonNames) {
        if (pokemonNames.length > 0) {

            for (const poke of pokemonNames) {
                await getPokemonByName(poke).then(res => setPokemon(prev => [...prev, res]))
            }

        } else {
            setPokemon("error");
            console.log(pokemon);
        }

    }

    return <div className='SearchPage'>
        <LoadingIcon active={loading} />
        <SearchForm onClick={handleSubmit} />
        {pokemon === 'error' ? <p>Error</p> : <CardGrid pokemon={pokemon} />}

    </div>
}