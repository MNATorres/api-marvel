import './../styles/Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {


    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/api-marvel/Events"> Events
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </NavLink>
                </li>
                <li><NavLink to="/api-marvel/">Comics
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavLink></li>
                <li><NavLink to="/api-marvel/Series"> Series
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavLink></li>
                <li><NavLink to="/api-marvel/Characters">Characters
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