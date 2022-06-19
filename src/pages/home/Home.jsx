import './Home.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return <div className='HomePage'>
        <div><h1>PokeTEK</h1></div>
        <div className='home-button-container'>
            <Link to='/about'>About</Link>
            <Link to='/search'>Search</Link>
        </div>
    </div>
}