import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import FadeMenu from './FadeMenu';

function Header() {
    return (
        <div className="containerHeader">
            <div>
                <NavLink to="/api-marvel/">
                    <img className="logoHeader" src="https://i.imgur.com/4Rsjob3.png" alt="Logo" />
                </NavLink>
            </div>
            <div className="menuHeader">
                <ul className='links'>
                    <li><NavLink to="/api-marvel/">Home</NavLink></li>
                    <li><NavLink to="/api-marvel/Information">Information</NavLink></li>
                    <li><NavLink to="/api-marvel/Comunidad">Comunidad</NavLink></li>
                    <li><NavLink to="/api-marvel/Mas-Informacion">Mas Información</NavLink></li>
                </ul>

            </div>
            <FadeMenu />
        </div>
    )
}

export default Header;