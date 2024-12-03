import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchSliderImages } from '../../api/fetchImages/fetchImages';
import Loading from '../Loading/Loading';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const fetchedImages = await fetchSliderImages();
        if (fetchedImages.length === 0) {
          console.error('No images were fetched.');
        } else {
          setImages(fetchedImages);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '500px', 
        height: 'į00px', 
        margin: '0 auto', 
        overflow: 'hidden',
        borderRadius: '10px', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {images.length > 0 ? (
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index}>
              <Box
                component="img"
                src={`http://localhost:3000${image}`}
                alt={`Slide ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '50vh',
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </Slider>
      ) : (
        <Typography
          variant="h6"
          align="center"
          sx={{ mt: 4 }}
        >
          No images available.
        </Typography>
      )}
    </Box>
  );
};

export default ImageSlider;