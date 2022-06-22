import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css';

export default function Navbar({ route, children, ...props }) {
  return (
    <nav className='Navbar'>
      <ul>
        <h3>PokéTEK</h3>
        <CustomLink href='/' name='Home' />
        <CustomLink href='/about' name='About' />
        <CustomLink href='/search' name='Search' />
      </ul>
    </nav>
  );
}
