import { React, useState, useEffect } from "react"
import { Card, CardActions, CardHeader, CardMedia, CardContent, IconButton, Typography, styled, Collapse } from "@material-ui/core";

{/* <span class="material-icons">
expand_more
</span> */}
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);
  const [details, setDetails] = useState([]);
  const [pics, setPics] = useState([]);

  useEffect(() => {
    async function getPics(id) {
      const rawJSON = await fetch(`http://52.26.193.201:3000/products/${product.id}/styles`);
      let json = await rawJSON.json();
      //console.log("styles:", pics.results[0].photos[0])
      let pic = await json.results[0].photos[0].url;
      console.log(pic)


      setPics(pic)
    };



    async function getDetails(id) {
      const rawJSON = await fetch(`http://52.26.193.201:3000/products/${product.id}`);
      let json = await rawJSON.json();



      setDetails(json)
    };
    getDetails();
    getPics();
  }, [product.id]);



  const handleExpandClick = () => {
    setExpanded(!expanded);


  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          More Details
          {/* <img src="./expand_more.png" alt="expand icon" /> */}
          {/* <ExpandMoreIcon /> */}
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Details:</Typography>
            <CardMedia
              component="img"
              height="194"
              image={pics}
              alt="picture"
            />
            <Typography paragraph>
              Slogan: {details.slogan}
            </Typography>
            <Typography paragraph>
              Category: {details.category}
            </Typography>
            <Typography>
              Price: $ {details.default_price}
            </Typography>
          </CardContent>
        </Collapse>
      </CardActions>

    </Card>


  );
}

export default ProductCard;