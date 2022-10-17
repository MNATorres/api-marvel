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
            <ul >
                <li><h3>More Information</h3></li>
                <li><a href="https://github.com/MNATorres/api-marvel">Repository</a></li>
                <li><a href="https://mnatorres.github.io/curriculum-Matias-Torres/">About the Developer</a></li>
                <li><a href="https://github.com/MNATorres">GitHub</a></li>
            </ul>
            <ul>
                <li><h5>Content</h5></li>
                <li>Comics</li>
                <li>Movies</li>
                <li>Authors</li>
                <li>Series</li>
            </ul>
            <ul>
                <li><h5>Content</h5></li>
                <li>Comics</li>
                <li>Movies</li>
                <li>Authors</li>
                <li>Series</li>
            </ul>
        </div>
    )
}