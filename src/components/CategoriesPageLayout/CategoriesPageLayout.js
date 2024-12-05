import React, { useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import Submenu from '../../components/Submenu/Submenu';
import ProductsList from '../../components/ProductList/ProductList';
import AddProductForm from '../Form/AddProductForm';
import Loading from '../Loading/Loading';
import { useAppContext } from '../../context/AppContext';

const CategoryPageLayout = () => {
  const { state, handleSubcategoryClick, addNewProduct } = useAppContext();
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  const handleProductAdded = newProduct => {
    addNewProduct(newProduct);
    setIsAddProductModalOpen(false); 
  };

  if (state.loading) {
    return <Loading />;
  }

  if (!state.category) {
    return (
      <Box sx={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h6" color="error">
          Kategorija nerasta arba nepasiekiama.
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', padding: '20px', gap: '20px' }}>
        <Submenu
          subcategories={state.subcategories}
          selectedSubcategory={state.selectedSubcategory}
          onSubcategoryClick={handleSubcategoryClick}
        />

        <Box sx={{ flex: 1 }}>
          {state.products.length === 0 ? (
            <Typography variant="body1" sx={{ marginTop: '20px' }}>
              Šioje subkategorijoje nėra jokių produktų.
            </Typography>
          ) : (
            <ProductsList products={state.products} />
          )}

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
            onClick={() => setIsAddProductModalOpen(true)}
          >
            Pridėti naują prekę
          </Button>

          {isAddProductModalOpen && (
            <AddProductForm
              selectedSubcategory={state.selectedSubcategory}
              onProductAdded={handleProductAdded}
              onClose={() => setIsAddProductModalOpen(false)}
            />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default CategoryPageLayout;