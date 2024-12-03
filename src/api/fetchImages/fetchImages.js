import axios from 'axios';

export const fetchSliderImages = async () => {
  try {
    const response = await axios.get('http://localhost:3000/images')
    return response.data
  } catch (error) {
    console.error('Error fetching images:', error)
    return []
  }
}
