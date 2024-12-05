import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import EditingProductForm from '../../components/Form/EditingProductForm';
import { Box, Typography } from '@mui/material';
import Loading from '../../components/Loading/Loading';

const EditingPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { state, editProduct } = useAppContext();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProduct = state.products.find((product) => product._id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [state.products, productId]);

  const handleEditSubmit = async (updatedData) => {
    try {
      await editProduct(productId, updatedData);
      navigate(`/product/${productId}`); // Redirect to product details after edit
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h5" color="error">
          Product not found.
        </Typography>
      </Box>
    );
  }

  return (
    <EditingProductForm
      productId={productId}
      initialProductData={product}
      onSubmit={handleEditSubmit}
      onClose={() => navigate(`/product/${productId}`)}
    />
  );
};

export default EditingPage;