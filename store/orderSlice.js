import { createSlice } from "@reduxjs/toolkit";
// totalPrice
// totalQuantity
// Date
// Name
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload);
    },
  },
});
export const orderActions = orderSlice.actions;
export default orderSlice;
