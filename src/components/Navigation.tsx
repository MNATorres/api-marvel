import './../styles/Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {


    return (
        <div className="navigation">
            <ul>
                <li><NavLink to="/api-marvel/">Comics</NavLink></li>
                <li><NavLink to="/api-marvel/Information">Series</NavLink></li>
                <li><NavLink to="/api-marvel/Comunidad">Authors</NavLink></li>
                <li><NavLink to="/api-marvel/Mas-Informacion"> Movies</NavLink></li>
            </ul>
        </div>
    );
}