import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0 }
const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers : {
		increment (state) {
			state.value += 1;
		},
		decrement (state) {
			if(state.value > 0) {
				state.value -= 1;
			}
		},
		setCounter (state, action) {
			state.value = action.payload
		}
	}
})
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;