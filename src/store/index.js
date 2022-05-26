import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/Products.reducer";
import oneProductReducer from "./reducers/OneProduct.reducer";

const rootReducer = combineReducers({
  productReducer,
  oneProductReducer,
});

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);
