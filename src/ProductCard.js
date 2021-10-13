import { Card, CardActions, CardHeader, CardMedia, CardContent, Typography } from "@material-ui/core";


function ProductCard({ product }) {

  return (
    <Card>
      {console.log(product.name)}

      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>


      </CardContent>

    </Card>


  );
}

export default ProductCard;