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

export const fetchSubcategories = async categoryId => {
  try {
    const response = await axios.get(`${BASE_URL}/categories/${categoryId}/subcategories`);
    return response.data
  } catch (error) {
    console.error(`Error fetching subcategories for category ${categoryId}`, error)
    throw error;
  }
}