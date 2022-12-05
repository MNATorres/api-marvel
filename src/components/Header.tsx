import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import MenuMovil from './MenuMovil';
import MenuContent from './MenuContent';
import Button from '@mui/material/Button';

function Header() {
    return (
        <div className="containerHeader">
            <div>
                <NavLink to="/apiMarvel">
                    <img className="logoHeader" src="https://i.imgur.com/4Rsjob3.png" alt="Logo" />
                </NavLink>
            </div>
            <div className="menuHeader">
                
                    <MenuContent />
                    
                    <Button><a href="https://github.com/MNATorres/api-marvel">Repository</a></Button>
                    <Button><a href="https://mnatorres.github.io/curriculum-Matias-Torres/">About the Developer</a></Button>
                    <Button><a href="https://github.com/MNATorres">GitHub</a></Button>
    
            </div>
            <MenuMovil />
        </div>
    )
}

export default Header;