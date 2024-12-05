import { useState, useEffect } from 'react';
import { fetchCategories, fetchProductsByCategoryId, fetchSubcategories } from '../fetchCategoriesAndSubcategories/fetchCategoriesAndSubcategories';

export const useCategoryData = (categoryName) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const categories = await fetchCategories();
        const selectedCategory = categories.find((cat) => cat.name.toLowerCase() === categoryName.toLowerCase());
        setCategory(selectedCategory);

        if (selectedCategory) {
          const [productsData, subcategoriesData] = await Promise.all([
            fetchProductsByCategoryId(selectedCategory._id),
            fetchSubcategories(selectedCategory._id),
          ]);
          setProducts(productsData);
          setSubcategories(subcategoriesData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [categoryName]);

  const handleSubcategoryClick = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
    setLoading(true); // Start loading
    if (subcategoryId) {
      const filteredProducts = products.filter((product) => product.subcategoryId === subcategoryId);
      setProducts(filteredProducts);
      setLoading(false); // Stop loading
    } else if (category) {
      fetchProductsByCategoryId(category._id).then((data) => {
        setProducts(data);
        setLoading(false); // Stop loading
      });
    }
  };

  return { category, products, subcategories, selectedSubcategory, loading, handleSubcategoryClick };
};