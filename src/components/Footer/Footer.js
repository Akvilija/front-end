import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Instagram, Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        p: 3,
        backgroundColor: '#FFF8E1',
        borderTop: '2px solid #FF7043', 
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        Connect with us
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <IconButton
          aria-label="Instagram"
          color="primary"
          component="a"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </IconButton>
        <IconButton
          aria-label="Facebook"
          color="primary"
          component="a"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          color="primary"
          component="a"
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          color="primary"
          component="a"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>
      </Box>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} Pets. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;