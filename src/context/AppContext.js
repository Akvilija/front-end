import React, { createContext, useReducer, useContext } from 'react';
import { initialState, appReducer } from './reducer';
import {
  fetchCategories,
  fetchSubcategories,
} from '../api/fetchCategoriesAndSubcategories/fetchCategoriesAndSubcategories';
import {
  fetchProductsByCategoryId,
  fetchProductsBySubcategoryId,
  addProduct,
  deleteProductById,
} from '../api/fetchProducts/fetchProducts';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const fetchAllCategories = async () => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const categories = await fetchCategories();
      dispatch({ type: 'SET_CATEGORIES', payload: categories });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch categories' });
    }
  };

  const fetchCategoryData = async (categoryName) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const categories = await fetchCategories();
      const category = categories.find((cat) => cat.name.toLowerCase() === categoryName.toLowerCase());
      if (!category) throw new Error(`Category "${categoryName}" not found`);

      dispatch({ type: 'SET_CATEGORY', payload: category });

      const [products, subcategories] = await Promise.all([
        fetchProductsByCategoryId(category._id),
        fetchSubcategories(category._id),
      ]);

      dispatch({ type: 'SET_PRODUCTS', payload: products });
      dispatch({ type: 'SET_SUBCATEGORIES', payload: subcategories });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const handleSubcategoryClick = async (subcategoryId) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      if (subcategoryId) {
        const products = await fetchProductsBySubcategoryId(subcategoryId);
        dispatch({ type: 'SET_PRODUCTS', payload: products });
      } else {
        const products = await fetchProductsByCategoryId(state.category._id);
        dispatch({ type: 'SET_PRODUCTS', payload: products });
      }
      dispatch({ type: 'SET_SELECTED_SUBCATEGORY', payload: subcategoryId });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch products for subcategory' });
    }
  };

  const addNewProduct = async productData => {
    try {
      const backendResponse = await addProduct(productData);
      const newProduct = { ...productData, _id: backendResponse.insertedId };
      dispatch({
        type: 'ADD_PRODUCT',
        payload: newProduct,
      });
    } catch (error) {
      console.error('Failed to add product:', error.message);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await deleteProductById(productId);
      dispatch({
        type: 'DELETE_PRODUCT',
        payload: productId,
      });
    } catch (error) {
      console.error('Failed to delete product:', error.message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        state,
        fetchAllCategories,
        fetchCategoryData,
        handleSubcategoryClick,
        addNewProduct,
        deleteProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);