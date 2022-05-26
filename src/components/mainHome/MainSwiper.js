import containerProducts from "../../assets/Icon/LogoEggVW.png";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { giveProduct } from "../../store/reducers/OneProduct.reducer";
import { Link } from "react-router-dom";

const MainSwiperContent = ({ productId }) => {
  const dispatch = useDispatch();
  const { oneProduct, loading } = useSelector(
    (state) => state.oneProductReducer
  );
  useEffect(() => {
    dispatch(giveProduct(productId));
  }, [productId]);

  console.log(oneProduct);

  const { image, id } = oneProduct;

  if (loading === true) {
    return (
      <div className="MainSwiperContent" key={id}>
        <div>
          <img
            src={containerProducts}
            alt="Products Container"
            width={320}
          ></img>
        </div>
      </div>
    );
  }
  return (
    <Link to="product_detail/:productId">
      <div className="MainSwiperContent">
        <div>
          <img src={image} alt="Products Container" width={320}></img>
        </div>
      </div>
    </Link>
  );
};

export default MainSwiperContent;
