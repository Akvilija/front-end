import { Typography, List, ListItem, ListItemButton, ListItemText, Divider, Box } from '@mui/material';

const Submenu = ({ subcategories, selectedSubcategory, onSubcategoryClick }) => {
  return (
    <Box
      sx={{
        width: '250px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '15px',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Subkategorijos
      </Typography>
      <Divider sx={{ marginBottom: '10px' }} />
      <List>
        {/* All Products Option */}
        <ListItem disablePadding>
          <ListItemButton
            selected={!selectedSubcategory}
            onClick={() => onSubcategoryClick(null)}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#FF7043',
                color: '#fff',
                '&:hover': { backgroundColor: '#FF7043' },
              },
            }}
          >
            <ListItemText primary="Visos prekės" />
          </ListItemButton>
        </ListItem>
        {/* Render Subcategories */}
        {subcategories.map((subcategory) => (
          <ListItem key={subcategory._id} disablePadding>
            <ListItemButton
              selected={selectedSubcategory === subcategory._id}
              onClick={() => onSubcategoryClick(subcategory._id)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: '#FF7043',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#FF7043' },
                },
              }}
            >
              <ListItemText primary={subcategory.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Submenu;
