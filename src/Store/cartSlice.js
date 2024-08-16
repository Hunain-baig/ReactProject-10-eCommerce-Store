import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};



export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, data) => {
      console.log("Data ===>", data); // Log the incoming data for debugging
      // If the cart already has items
      if (state.cart.length > 0) {
        // Check if the item to be added already exists in the cart
        let itemExist = state.cart.find((item) => item.id === data.payload.id);
        if (itemExist) {
          // If the item exists, just increase the quantity of that item
          itemExist.quantity += data.payload.quantity;
        } else {
          // If the item doesn't exist, set the quantity to 1 and add the item to the cart
          data.payload.quantity = 1;
          state.cart.push(data.payload); // Push the new item into the cart array
        }
      } else {
        // If the cart is empty, add the item with a quantity of 1
        data.payload.quantity = 1;
        state.cart.push(data.payload); // Push the new item into the cart array
      }
    },
    increment: (state, action) => {
      // Find the index of the item in the cart
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      // If the item is found in the cart, increment its quantity by 1
      if (index !== -1) {
        state.cart[index].quantity += 1;
      }
    },
    // Reducer function to handle decrementing the quantity of an item in the cart
    decrement: (state, action) => {
      // Find the index of the item in the cart
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      // If the item is found and its quantity is greater than 1, decrease the quantity by 1
      if (index !== -1 && state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
      } else if (index !== -1 && state.cart[index].quantity === 1) {
        // If the item quantity is 1 and we want to decrement, remove the item from the cart
        // state.cart.splice(index, 1);
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});


export const { addToCart , removeItem ,increment ,decrement} = cartSlice.actions;

export default cartSlice.reducer;
