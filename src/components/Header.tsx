import { NavLink } from 'react-router-dom';
import '../estyles/Header.css';

function Header(){
    return(
        <div className="containerHeader">
            <div className="logoHeader">
                <p>Logo</p>
            </div>
            <div className="menuHeader">
                <ul className='links'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Information">Information</NavLink></li>
                    <li><NavLink to="/Comunidad">Comunidad</NavLink></li>
                    <li><NavLink to="/Mas-Informacion">Mas Información</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;