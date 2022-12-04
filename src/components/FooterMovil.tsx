import './../styles/FooterMovil.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';

export default function FooterMovil() {
    return (
        <div className='acordeonFooter'>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ background: "rgb(6, 12, 47)", color: "white" }}
                >
                    <Typography >CONTENT</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className='listFooterMovil'>
                        <li><NavLink to="/">Events</NavLink></li>
                        <li><NavLink to="/apiMarvel/Characters">Characters</NavLink></li>
                        <li><NavLink to="/apiMarvel/Comics"> Comics</NavLink></li>
                        <li><NavLink to="/apiMarvel/Series"> Series</NavLink></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    style={{ background: "rgb(6, 12, 47)", color: "white" }}
                >
                    <Typography>ABOUT THE DEVELOPER</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className='listFooterMovil'>
                        <li><a href="https://www.linkedin.com/in/javascript-react/">LinkedIn</a></li>
                        <li><a href="https://mnatorres.github.io/curriculum-Matias-Torres/">Curriculum Vitae</a></li>
                        <li><a href="https://github.com/MNATorres">GitHub</a></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    style={{ background: "rgb(6, 12, 47)", color: "white" }}
                >
                    <Typography>CONTACT INFORMATION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className='listFooterMovil'>
                        <li>Mail: mtri21019@gmail.com</li>
                        <li>Telephone: +54 9 11 2632-8057</li>
                        <li><a href="https://www.linkedin.com/in/javascript-react/">LinkedIn</a></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    style={{ background: "rgb(6, 12, 47)", color: "white" }}
                >
                    <Typography>OTHER PROJECTS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className='listFooterMovil'>
                        <li><a href="https://mnatorres.github.io/Coffe-and-Coke/">Coffe and Coke</a></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
