import React, { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import CategoryPageLayout from '../../components/CategoriesPageLayout/CategoriesPageLayout';

const CatsPage = () => {
  const { state, fetchCategoryData, handleSubcategoryClick } = useAppContext();

  useEffect(() => {
    fetchCategoryData('katės');
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

export default CatsPage;
