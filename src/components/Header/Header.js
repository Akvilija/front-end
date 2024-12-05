import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#FFF8E1',
        boxShadow: 'none',
        borderBottom: '2px solid #FF7043', 
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <PetsIcon sx={{ color: '#FF7043' }} />
          <Typography variant="h6" sx={{ color: '#333' }}>
            Funny Pet Shop
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 3}}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          >
            <HomeIcon />
          </NavLink>
          <NavLink
            to="/cats"
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          >
            Katės
          </NavLink>
          <NavLink
            to="/dogs"
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          >
            Šunys
          </NavLink>
          <NavLink
            to="/little-pets"
            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          >
            Smulkūs gyvūnai
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;