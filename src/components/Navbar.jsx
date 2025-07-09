import logo from '../assets/images/tte.png'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
            <nav>
                <a href="#" className="logo">
                    <img src={logo} alt="" />
                </a>
                <ul className="nav-links">
                    <li>
                       <Link to={'/'}>HOME</Link>
                    </li>
                    <li>
                        <Link to={'/menu'}>MENU</Link>
                    </li>
                    <li>
                         <Link to={'/about'}>ABOUT</Link>
                    </li>
                    <li>
                     <Link to={'/contact'}>CONTACT</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                </ul>
            </nav>

    )
}

export default Navbar