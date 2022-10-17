import { NavLink } from 'react-router-dom';
import './../styles/ContentFooter.css';

export default function ContentFooter() {
    return (
        <div className="contentFooter">
            <ul >
                <li><h3>Content</h3></li>
                <li><NavLink to="/api-marvel/">Comics</NavLink></li>
                <li><NavLink to="/api-marvel/Characters">Characters</NavLink></li>
                <li><NavLink to="/api-marvel/Creators">Creators</NavLink></li>
                <li><NavLink to="/api-marvel/Events"> Events</NavLink></li>
                <li><NavLink to="/api-marvel/Series"> Series</NavLink></li>
                <li><NavLink to="/api-marvel/Stories"> Stories</NavLink></li>
            </ul>
            <ul>
                <li><h3>Developer</h3></li>
                <li><a href="https://www.linkedin.com/in/javascript-react/">LinkedIn</a></li>
                <li><a href="https://mnatorres.github.io/curriculum-Matias-Torres/">Curriculum</a></li>
                <li><a href="https://github.com/MNATorres">GitHub</a></li>
            </ul>
            <ul>
                <li><h3>Contact Information</h3></li>
                <li>Mail: mtri21019@gmail.com</li>
                <li>Telephone: +54 9 11 2632-8057</li>
                <li><a href="https://www.linkedin.com/in/javascript-react/">LinkedIn</a></li>
            </ul>
            <ul>
                <li><h3>Other Projet</h3></li>
                <li><a href="https://mnatorres.github.io/Coffe-and-Coke/">Coffe and Coke</a></li>
            </ul>
        </div>
    )
}