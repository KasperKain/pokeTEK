import Card from '../Card/Card';
import './CardGrid.css';
export default function CardGrid(props) {
  const pokemon = props.pokemon;

  return (
    <div className='CardGrid'>
      {pokemon.map((poke) => (
        <Card key={poke.name} details={poke} />
      ))}
    </div>
  );
}
