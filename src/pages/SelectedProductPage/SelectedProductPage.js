import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { Box, Typography, Button } from '@mui/material';
import ContainerComponent from '../../components/Container/Container';
import Loading from '../../components/Loading/Loading';

const SelectedProductPage = () => {
  const { productId } = useParams(); // Get product ID from route
  const navigate = useNavigate();
  const { state, deleteProduct } = useAppContext();
  const [product, setProduct] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Find product in context state
  useEffect(() => {
    const foundProduct = state.products.find((product) => product._id === productId);
    setProduct(foundProduct || null);
  }, [state.products, productId]);

  // Handle delete action
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteProduct(productId); // Call the context delete function
      navigate('/'); // Navigate to home or any other fallback page
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!product && !isDeleting) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h5" color="error">
          Product not found or has been deleted.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Go Back to Home
        </Button>
      </Box>
    );
  }

  if (isDeleting) {
    return <Loading />
  }

  return (
    <ContainerComponent>
      <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
        <Typography variant="h3" gutterBottom>{product.name}</Typography>
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{ width: '100%', maxWidth: '500px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
        />
        <Typography variant="body1" color="text.secondary">{product.description}</Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Price: {product.price} €</Typography>
        <Typography variant="body2" color="text.secondary">
          Subcategory ID: {product.subcategoryId}
        </Typography>
        <Box display="flex" gap={2} mt={4}>
          <Button variant="contained" color="secondary" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/edit-product/${productId}`)} 
          >
            Edit
          </Button>
        </Box>
      </Box>
    </ContainerComponent>
  );
};

export default SelectedProductPage;
