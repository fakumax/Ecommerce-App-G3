import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './../../redux/actions/shoppingCartActions.js';
import { addFavorite, deleteFavorite } from './../../redux/actions/wishlistAction';
// * STYLES *
import { useStyles } from './ProductCardStyle';
import { useStylesDark } from './ProductCardStyleDark';

const ProductCard = ({ product }) => {
  //select color mode
  const dayMode = useStyles();
  const darkMode = useStylesDark();
  let classes;
  const actualColor = useSelector(state => state.color);
  console.log(actualColor);
  if (actualColor) {
    classes = darkMode;
  } else {
    classes = dayMode;
  }

  const [favorites, setFavorites] = useState(false)

  const dispatch = useDispatch();
  const pushToCart = () => dispatch(addToCart(product,1));

  const handleFavorites = () => {
    if(favorites) {
      dispatch(deleteFavorite(product));
      setFavorites(false);
    } else {
      dispatch(addFavorite(product));
      setFavorites(true);
    }
  }

  const inLocal = useSelector(state => state.cart.items)
  let noStock = false
  for(let each of inLocal){
    if(each.id === product.id){
      if(each.stock === each.qty){
        noStock = true;
      }
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeaderP}
        title={
          <Link
            component={RouterLink}
            style={{ textDecoration: 'none' }}
            to={`/products/${product.id}`}
            className={classes.headertitle}
          >
            {product.name}
          </Link>
        }
        subheader={
            <Fragment>
              {
                product.sizeMattress ?
                <div>
                  <Typography variant="h6">Medida(cm): {product.size}</Typography>
                  <Typography variant="h6">Medida: {product.sizeMattress}</Typography>
                  <Typography variant="h6" className={classes.price}>{`$ ${product.price}`}</Typography>
                </div> :
                <div>
                  <Typography variant="h6">Medida(cm): {product.size}</Typography>
                  <Typography variant="h6" className={classes.price}>{`$ ${product.price}`}</Typography>
                </div>
              }
            </Fragment>
        }
      />
      <CardMedia
        className={classes.media}
        image={product.image[0]}
        title={`image ${product.name}`}
      />
      <CardActions className={classes.cardact}>
        <IconButton aria-label="Agregar a favoritos" onClick={handleFavorites} >
          <FavoriteIcon style={favorites ? {color: "red"} : {}} />
        </IconButton>
        <Button
          variant="contained"
          className={classes.button}
          disabled={false}
          onClick={pushToCart}
        >
          Agregar a carrito
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
