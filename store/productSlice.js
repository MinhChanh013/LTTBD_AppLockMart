import { createSlice } from "@reduxjs/toolkit";
import data from "../src/api/data";
const productSlice = createSlice({
  name: "product",
  initialState: {
    items: data,
  },
  reducers: {
    changeFavoriteItem(state, action) {
      const newItem = action.payload;
      state.items.forEach((item) => {
        if (item.id === newItem.id) {
          item.favorites = !item.favorites;
        }
      });
      const existingCart = state.items.find((item) => item.id === newItem.id);
      console.log(existingCart);
    },
  },
});
export const productActions = productSlice.actions;
export default productSlice;
