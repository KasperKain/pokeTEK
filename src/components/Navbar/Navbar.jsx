import "./Navbar.css"
import CustomLink from '../CustomLink/CustomLink'

export default function Navbar({ route, children, ...props }) {


    return <nav className='Navbar'>
        <h3>PokéTEK</h3>
        <ul>
            <CustomLink href='/' name="Home" />
            <CustomLink href='/about' name="About" />
            <CustomLink href='/search' name="Search" />
        </ul>
    </nav>
}