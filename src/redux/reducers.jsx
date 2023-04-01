import { createReducer } from "@reduxjs/toolkit";

export const CartReducer = createReducer({
    cartItems: [],
    subTotal: 0,
    Shipping: 0,
    tax: 0,
    total: 0
}, {
    addToCart: (state, action) => {
        const item = action.payload;
        const isItemExist = state.cartItems.find((i) => i.id === item.id);
        if (isItemExist) {
            state.cartItems.forEach(i => {
                if (i.id === item.id) i.quantity += 1
            })
        } else {
            state.cartItems.push(item)
        }
    },
    decrement: (state, action) => {
        const item = state.cartItems.find(i => i.id === action.payload)
        if (item.quantity > 1) {
            state.cartItems.map(i => {
                if (i.id === item.id) i.quantity -= 1;
            })
        }
    },
    deleteItem: (state, action) => {
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload)
    },
    calculations: (state) => {
        let sum = 0;
        let shipping = 0;
        let tax = 0;
        state.cartItems.forEach((i) => {
            sum += (i.price * i.quantity);
            shipping += 5;
            tax += (i.price * 1) / 100;
        })
        state.subTotal = sum
        state.Shipping = shipping
        state.tax = tax
        state.total = state.tax + state.subTotal + state.Shipping

    }
})