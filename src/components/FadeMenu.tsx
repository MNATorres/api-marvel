import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='menuMovil'>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <GiHamburgerMenu style={{fontSize:"2.3rem", color: "white"}}/>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><NavLink to="/">Home</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/Information">Information</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/Comunidad">Comunidad</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/Mas-Informacion">Mas Información</NavLink></MenuItem>
      </Menu>
    </div>
  );
}
