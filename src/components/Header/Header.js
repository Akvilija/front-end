import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import { fetchCategories, fetchSubcategories } from '../../api/categoriesApi/categoriesApi';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    loadCategories();
  }, []);

  const handleMenuOpen = async (event, category) => {
    setAnchorEl(event.currentTarget);
    setActiveCategory(category);

    try {
      const subcategoriesData = await fetchSubcategories(category._id);
      setSubcategories(subcategoriesData);
    } catch (error) {
      console.error('Failed to fetch subcategories:', error);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveCategory(null);
    setSubcategories([]);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#FFF8E1',
        boxShadow: 'none',
        borderBottom: '2px solid #FF7043', // Elegantiškas apatinis borderis
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logotipas */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <PetsIcon sx={{ color: '#FF7043' }} />
          <Typography variant="h6" sx={{ color: '#333' }}>
            Funny Pet Shop
          </Typography>
        </Box>
        {/* Kategorijos su subkategorijomis */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {categories.map((category) => (
            <Box
              key={category._id}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                color: 'black',
                '&:hover': { borderBottom: '2px solid #FF7043' }, // Hover efektas
              }}
              onMouseEnter={(e) => handleMenuOpen(e, category)}
              onMouseLeave={handleMenuClose}
            >
              <Typography>{category.name}</Typography>
              {/* Submeniu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(activeCategory === category)}
                onClose={handleMenuClose}
                MenuListProps={{
                  onMouseLeave: handleMenuClose,
                }}
                sx={{
                  mt: 1,
                  '& .MuiMenuItem-root': { padding: '8px 16px', color: 'black' },
                }}
              >
                {subcategories.map((subcategory) => (
                  <MenuItem key={subcategory._id} onClick={handleMenuClose}>
                    <NavLink
                      to={`/categories/${category._id}/subcategories/${subcategory._id}`}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      {subcategory.name}
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
