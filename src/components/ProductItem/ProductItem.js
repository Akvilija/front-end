import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {product.image && (
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: 'cover' }}
      />
      )}
      <CardContent>
        <Typography variant="h6" gutterBottom>{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">{product.description}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1, fontWeight: 'bold' }}>{product.price} €</Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/product/${product._id}`}
          size="small"
          color="primary"
          sx={{
            textDecoration: 'none',
            textTransform: 'none',
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;