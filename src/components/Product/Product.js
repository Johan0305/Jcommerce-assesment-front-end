import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../store/reducers/Products.reducer";
import { Link } from "react-router-dom";
import Counter from "./Counter";

export const ManyProduct = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productReducer
  );
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (loading === true) {
    return (
      <div className="containerLoading">
        <div className="card">Loading...</div>
      </div>
    );
  }

  if (error !== null) {
    return <p>UPS! ocurrió un error. Error:{error}</p>;
  }

  return products.map(({ id, title, image, price }) => {
    return (
      <div className="Product" key={id}>
        <div className="productwithcontainer">
          <img src={image} alt="nameproduct" width={100} />
        </div>
        <div className="info">
          <strong>{title}</strong>
          <p>{`$${price}`}</p>
          <Counter id={id}></Counter>
        </div>
      </div>
    );
  });
};

export const ProductMinus10 = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return products
    .filter(({ price }) => price < 10)
    .map(({ id, title, image, price }) => {
      return (
        <Link to={`/product_detail/${id}`}>
          <div className="Product" key={id}>
            <div className="productwithcontainer">
              <img src={image} alt="nameproduct" width={100} />
            </div>
            <div className="info">
              <strong>{title}</strong>
              <p>{`$${price}`}</p>
            </div>
          </div>
        </Link>
      );
    });
};

export const ProductSwiper = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(getProduct());
  }, []);
};
