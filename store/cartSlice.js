import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingCart = state.items.find((item) => item.id === newItem.id);
      // find trả về tham chiếu tới nó
      state.totalQuantity++;
      state.totalPrice += newItem.price || existingCart.price;
      if (!existingCart) {
        state.items.push({
          id: newItem.id,
          categories: newItem.categories,
          img: newItem.img,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingCart.quantity++;
      }
    },
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existingCart = state.items.find((item) => item.id === newItem.id);
      // find trả về tham chiếu tới nó
      state.totalQuantity += newItem.quantity;
      state.totalPrice +=
        newItem.price * newItem.quantity ||
        existingCart.price * existingCart.quantity;
      if (!existingCart) {
        state.items.push({
          id: newItem.id,
          categories: newItem.categories,
          img: newItem.img,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
        });
      } else {
        existingCart.quantity += newItem.quantity;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingCart = state.items.find((item) => item.id === id);
      existingCart.quantity--;
      state.totalQuantity--;
      state.totalPrice -= existingCart.price;
      if (existingCart.quantity === 0) {
        state.items = state.items.filter((item) => item.quantity !== 0);
      }
    },
    removeAllItemFromCart: (state, action) => {
      const id = action.payload;
      const existingCart = state.items.find((item) => item.id === id);
      state.totalQuantity -= existingCart.quantity;
      state.totalPrice -= existingCart.price * existingCart.quantity;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
