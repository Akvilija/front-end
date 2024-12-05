import React, { useState } from 'react';
import { Button, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


const AddProductForm = ({ selectedSubcategory, onProductAdded, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSubcategory) {
      setError('Pirma pasirinkite subkategoriją.');
      return;
    }
    if (!name.trim() || !description.trim() || !price.trim() || !image.trim()) {
      setError('Visi laukai yra privalomi.');
      return;
    }

    const productData = {
      name,
      description,
      price,
      image,
      subcategoryId: selectedSubcategory,
    };

    try {


      onProductAdded(productData); 
      setName('');
      setDescription('');
      setPrice('');
      setImage('');
      setError('');
    } catch (err) {
      console.error('Error adding product:', err);
      setError('Nepavyko pridėti prekės.');
    }
  };

  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Pridėti naują prekę</DialogTitle>
      <DialogContent>
        {error && (
          <Typography variant="body2" color="error" sx={{ marginBottom: '10px' }}>
            {error}
          </Typography>
        )}
        <TextField
          label="Prekės pavadinimas"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          label="Prekės aprašymas"
          fullWidth
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          label="Kaina (€)"
          fullWidth
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          label="Nuotraukos URL"
          fullWidth
          value={image}
          onChange={(e) => setImage(e.target.value)}
          sx={{ marginBottom: '10px' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Atšaukti
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Pridėti prekę
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProductForm;
