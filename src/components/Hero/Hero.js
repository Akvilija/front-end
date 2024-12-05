import React from 'react';
import { Box, Typography, TextField, Button, Grid2 as Grid } from '@mui/material';
import ImageSlider from '../ImageSlider/ImageSlider'
import ContainerComponent from '../Container/Container';

const HeroSection = () => {
  return (
    <ContainerComponent>
    <Grid 
        container 
        spacing={4} 
        alignItems="center" 
        sx={{
            alignItems: "center",
            padding: '40px 20px',
            backgroundColor: '#FFF8E1',
            borderRadius: '30px',
        }}>
      <Grid xs={12} md={6}>
        <Box sx={{ textAlign: 'left', padding: '20px' }}>
          <Typography
            variant="h3"
            sx={{ marginBottom: '10px', color: '#333', fontWeight: 'bold' }}
          >
            Geriausia vieta tavo augintiniams!
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: '20px', color: '#555', fontSize: '18px' }}
          >
            Atrask geriausius produktus, kuriuos tavo augintiniai pamils. Prabangos, patogumo ir
            džiaugsmo vieta tavo mylimiems draugams!
          </Typography>
          <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Ko ieškote?"
              sx={{
                backgroundColor: '#fff',
                borderRadius: '5px',
                width: '70%',
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: '10px 20px',
                backgroundColor: '#FF7043',
              }}
            >
              Ieškoti
            </Button>
          </Box>
        </Box>
      </Grid>
      <ImageSlider />
    </Grid>
  </ContainerComponent>
  );
};

export default HeroSection;
