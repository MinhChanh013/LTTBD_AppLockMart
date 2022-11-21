import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";
import productSlice from "./productSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    order: orderSlice.reducer,
  },
});
export default store;
