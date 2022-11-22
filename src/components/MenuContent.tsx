import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { NavLink } from 'react-router-dom';
import { BiChevronDown } from "react-icons/bi";
import './../styles/MenuContent.css';

export default function MenuContent() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color: "white", fontSize: "15px"}}
      >
        Content <BiChevronDown style={{fontSize: "22px"}}/>
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
        <MenuItem onClick={handleClose}><NavLink to="/api-marvel/">Comics</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/api-marvel/Series"> Series</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/api-marvel/Characters">Characters</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/api-marvel/Creators">Creators</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/api-marvel/Events"> Events</NavLink></MenuItem>
      </Menu>
    </div>
  );
}
