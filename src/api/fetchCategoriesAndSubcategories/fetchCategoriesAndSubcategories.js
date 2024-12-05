import axios from 'axios';
import { BASE_URL } from '../../utils/BaseUrl';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchSubcategories = async (categoryId = null) => {
  try {
    const response = await axios.get(`${BASE_URL}/subcategories`, {
      params: categoryId ? { categoryId } : {}
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching subcategories:', error.message);
    throw error;
  }
};
