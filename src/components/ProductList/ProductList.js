import React from 'react';
import { Grid2 as Grid, Box, Typography } from '@mui/material';
import ProductItem from '../ProductItem/ProductItem'; 

const ProductsList = ({ products }) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Produktai
      </Typography>
      <Grid container spacing={2}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={product._id} sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              <ProductItem product={product} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ marginTop: '20px' }}>
            Tokių produktų nėra.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default ProductsList;