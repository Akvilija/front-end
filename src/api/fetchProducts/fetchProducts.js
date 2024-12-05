import axios from 'axios'
import { BASE_URL } from '../../utils/BaseUrl'

export const fetchProductsByCategoryId = async categoryId => {
  try {
    const response = await axios.get(`${BASE_URL}/categories/${categoryId}/products`)
    return response.data
  } catch (error) {
    console.error(`Error fetching products for category ID "${categoryId}":`, error.message)
    throw error
  }
}

export const fetchProductsBySubcategoryId = async subcategoryId => {
  try {
    const response = await axios.get(`${BASE_URL}/subcategories/${subcategoryId}/products`)
    return response.data
  } catch (error) {
    console.error(`Error fetching products for subcategory ID "${subcategoryId}":`, error.message)
    throw error
  }
}

export const addProduct = async productData => {
  try {
    const response = await axios.post(`${BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error.message);
    throw error;
  }
};

export const updateProductById = async (productId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/products/${productId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with ID "${productId}":`, error.message);
    throw error;
  }
};

export const fetchProductById = async productId => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID "${productId}":`, error.message);
    throw error;
  }
};

export const deleteProductById = async (productId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with ID "${productId}":`, error.message);
    throw error;
  }
};
