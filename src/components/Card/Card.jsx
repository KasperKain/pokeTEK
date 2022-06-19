import { Link } from 'react-router-dom'
import './Card.css'

export default function Card(pokemon) {
    return <Link to={`/display/${pokemon.details.name}`} className='Card'>
        <img className='background-image' src={pokemon.details.sprites.other.home.front_default}></img>
        <div>
            <img className='title-image' src={pokemon.details.sprites.front_default}></img>
        </div>
        <div>
            <h2>{pokemon.details.name}</h2>
            <br />
            <span>
                <p>HP : {pokemon.details.stats[0].base_stat}</p>
                <p>Attack : {pokemon.details.stats[1].base_stat}</p>
                <p>Defence : {pokemon.details.stats[2].base_stat}</p>
                <p>Speed : {pokemon.details.stats[5].base_stat}</p>
            </span>
        </div>
    </Link>
}