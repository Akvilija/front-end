import React, { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import CategoryPageLayout from '../../components/CategoriesPageLayout/CategoriesPageLayout';

const LittlePetsPage = () => {
  const { state, fetchCategoryData, handleSubcategoryClick } = useAppContext();

  useEffect(() => {
    fetchCategoryData('smulkūs gyvūnai');
    // eslint-disable-next-line
  }, []);

  return (
    <CategoryPageLayout
      category={state.category}
      products={state.products}
      subcategories={state.subcategories}
      selectedSubcategory={state.selectedSubcategory}
      loading={state.loading}
      handleSubcategoryClick={handleSubcategoryClick}
    />
  );
};

export default LittlePetsPage;