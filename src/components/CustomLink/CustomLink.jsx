import './CustomLink.css'
import { Link } from 'react-router-dom'

export default function CustomLink({ href, name, active = 'false' }) {
    return <li className='CustomLink'>
        <Link to={href}>{name}</Link>
    </li>
}