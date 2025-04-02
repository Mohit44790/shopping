import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productsReducer from "./slice/producrSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer
  }
});

export default store;
