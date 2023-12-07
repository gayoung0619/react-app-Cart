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
				id: action.payload.id,
				count: action.payload.count,
				name: action.payload.name,
				price: action.payload.price,
				totalAmount: action.payload.price * action.payload.count
			};
			state.items.push(newItem);
		},
		updateItem (state, action) {
			const updatedItem = action.payload;
			const existingItemIndex = state.items.findIndex(item => item.id === updatedItem.id);

			if(existingItemIndex !== -1) {
				state.items[existingItemIndex] = {
					...state.items[existingItemIndex],
					count: updatedItem.count,
					totalAmount: updatedItem.price * updatedItem.count,
				}
			} else {
				// If the item does not exist, push the new item
				state.items.push(updatedItem);
			}
		},
		updateCartItem (state, action) {
			const { itemId, newOption } = action.payload;
			const updatedItems = state.items.map(item => {
				if (item.id === itemId) {
					return {
						...item,
						count: newOption,
					};
				}
				return item;
			});
			state.items = updatedItems;
		},
		removeItem (state) {}
	}
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;