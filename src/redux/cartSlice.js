import {createSlice} from "@reduxjs/toolkit";
import {useEffect} from "react";
const initialCartState = {
	items: []
};
const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		addItem (state, action) {
			const newItem = {
				id: Date.now(),
				count: action.payload.count,
				name: action.payload.name,
				price: action.payload.price,
				totalAmount: action.payload.price * action.payload.count
			};
			state.items.push(newItem);
		},
		removeItem (state) {}
	}
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;