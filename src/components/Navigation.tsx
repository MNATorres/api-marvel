import './../styles/Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {


    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/"> Events
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </NavLink>
                </li>
                <li><NavLink to="/apiMarvel/Comics">Comics
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavLink></li>
                <li><NavLink to="/apiMarvel/Series"> Series
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavLink></li>
                <li><NavLink to="/apiMarvel/Characters">Characters
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavLink></li>

            </ul>
        </div>
    );
}