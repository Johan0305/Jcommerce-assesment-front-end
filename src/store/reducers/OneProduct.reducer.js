import axios from "axios";

const ONE_PRODUCTS = "ONE_PRODUCTS";
const PRODUCT_LOADING = "POSTS_LOADING";

export const giveProduct = (id) => {
  return function (dispatch) {
    dispatch({ type: PRODUCT_LOADING, payload: true });
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(({ data }) => {
        dispatch({ type: ONE_PRODUCTS, payload: data });
      })
      .finally(() => {
        dispatch({ type: PRODUCT_LOADING, payload: false });
      });
  };
};

const initialState = {
  oneProduct: [],
  loading: false,
};

const oneProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ONE_PRODUCTS:
      return {
        ...state,
        oneProduct: action.payload,
      };

    default:
      return state;
  }
};

export default oneProductReducer;
