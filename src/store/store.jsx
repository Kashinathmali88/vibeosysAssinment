import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../store/reducers/productSlice";
import cartReducer from "../store/reducers/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
