import './../styles/Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {


    return (
        <div className="navigation">
            <ul>
                <li><NavLink to="/api-marvel/Events"> Events</NavLink></li>
                <li><NavLink to="/api-marvel/">Comics</NavLink></li>
                <li><NavLink to="/api-marvel/Series"> Series</NavLink></li>
                <li><NavLink to="/api-marvel/Characters">Characters</NavLink></li>
                
            </ul>
        </div>
    );
}