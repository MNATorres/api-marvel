import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import './../styles/MenuMovil.css';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ul className='listMenumovil1'>
          <li><h3>Content</h3></li>
          <li><NavLink to="/api-marvel/">Comics</NavLink></li>
          <li><NavLink to="/api-marvel/Characters">Characters</NavLink></li>
          <li><NavLink to="/api-marvel/Creators">Creators</NavLink></li>
          <li><NavLink to="/api-marvel/Events"> Events</NavLink></li>
          <li><NavLink to="/api-marvel/Series"> Series</NavLink></li>
          <li><NavLink to="/api-marvel/Stories"> Stories</NavLink></li>
        </ul>
      </List>
      <Divider />
      <List>
        <ul className='listMenumovil2'>
          <li><h3>More Information</h3></li>
          <li><a href="https://github.com/MNATorres/api-marvel">Repository</a></li>
          <li><a href="https://mnatorres.github.io/curriculum-Matias-Torres/">About the Developer</a></li>
          <li><a href="https://github.com/MNATorres">GitHub</a></li>
        </ul>
      </List>
      
    </Box>
  );

  return (
    <div className='menuMovil'>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
// import { GiHamburgerMenu } from "react-icons/gi"; <GiHamburgerMenu style={{fontSize:"2.3rem", color: "white"}}/>