import { useEffect, useState } from 'react';
import { Button, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useAppContext } from '../../context/AppContext';

const EditingProductForm = ({ productId, onClose }) => {
  const { state, editProduct } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    subcategoryId: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const product = state.products.find((prod) => prod._id === productId);
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        subcategoryId: product.subcategoryId || '',
      });
    }
  }, [state.products, productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.description.trim() || !formData.price.trim() || !formData.image.trim()) {
      setError('All fields are required.');
      return;
    }

    try {
      await editProduct(productId, formData);
      onClose(); 
    } catch (err) {
      console.error('Error editing product:', err);
      setError('Failed to update product.');
    }
  };

  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent>
        {error && (
          <Typography variant="body2" color="error" sx={{ marginBottom: '10px' }}>
            {error}
          </Typography>
        )}
        <TextField
          label="Name"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          multiline
          rows={3}
          value={formData.description}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          label="Price (€)"
          name="price"
          fullWidth
          type="number"
          value={formData.price}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          label="Image URL"
          name="image"
          fullWidth
          value={formData.image}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditingProductForm;