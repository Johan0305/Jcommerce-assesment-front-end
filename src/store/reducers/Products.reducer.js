import axios from "axios";

const PRODUCTS_SUCCESS = "POSTS_SUCCESS";
const PRODUCTS_ERROR = "POSTS_ERROR";
const PRODUCTS_LOADING = "POSTS_LOADING";

//action creator
export const getProduct = (payload) => {
  return function (dispatch) {
    dispatch({ type: PRODUCTS_LOADING, payload: true });
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({ type: PRODUCTS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: PRODUCTS_ERROR, payload: err });
      })
      .finally(() => {
        dispatch({ type: PRODUCTS_LOADING, payload: false });
      });
  };
};

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
