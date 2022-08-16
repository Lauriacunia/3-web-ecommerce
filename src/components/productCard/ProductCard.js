import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 280, minHeight: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={product.thumbnail}
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.nombre}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {product.precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
