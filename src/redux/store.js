import { configureStore } from '@reduxjs/toolkit';
import teaReducer from "./teaSlice";
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
	reducer: {
		teas: teaReducer,
		counter: counterReducer,
		cart: cartReducer,
	},
});

export default store;