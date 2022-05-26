import { Link, useParams } from "react-router-dom";
import ContainerInfo from "../components/about/containersInfo";
import ButtonNav from "../components/Nav/ButtonNav";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { giveProduct } from "../store/reducers/OneProduct.reducer";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { oneProduct, loading } = useSelector(
    (state) => state.oneProductReducer
  );
  useEffect(() => {
    dispatch(giveProduct(productId));
  }, [productId]);

  const { title, image, description, rating, price } = oneProduct;

  if (loading === true || rating === undefined) {
    return (
      <div className="containerLoading">
        <div className="card">Loading...</div>
      </div>
    );
  }
  return (
    <div className="mainProductDetail">
      <h1>{title}</h1>
      <div className="containerImg-sp-Product">
        <div className="containerImg-Product">
          <img src={image} alt={description}></img>
        </div>
        <div className="containerSpecific-Product">
          <ContainerInfo title={"Price"} text={`$${price}`} />
          <ContainerInfo title={"Rate"} text={`${rating.rate}/10`} />
        </div>
      </div>
      <div className="containerDes-Product">
        <ContainerInfo title={"Description"} text={description} />
      </div>
      <div className="containerBnt-Product">
        <Link to="/products">
          <ButtonNav text={"Go back to all products"} />
        </Link>
        <ButtonNav text={"Order"} />
      </div>
    </div>
  );
};

export default ProductDetail;
