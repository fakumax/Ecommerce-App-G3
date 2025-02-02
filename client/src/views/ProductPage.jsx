import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  activeLoading,
  getProductDetails,
} from "../redux/actions/productActions.js";
import { useDispatch, useSelector } from "react-redux";
import Product from "./../components/ProductDetails/Product.jsx";
import { Typography } from "@material-ui/core";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.productDetail)
  const isLoading = useSelector(state => state.products.isLoading)

  useEffect(() => {
      dispatch(activeLoading());
      dispatch(getProductDetails(id));
  }, [dispatch,id]);

  return isLoading ? (
    <Typography variant="h4" color="initial">Cargando...</Typography>
  ) : (
    <Product product={product} isLoading={isLoading} />
  );
};

export default ProductPage;
