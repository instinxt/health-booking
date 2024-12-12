import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
	name: "admin",
	initialState: {
		token: null,
		errorMessage: null,
	},
	reducers: {
		loginSuccess: (state, action) => {
			state.token = action.payload;
			state.errorMessage = null;
		},
		loginFailure: (state, action) => {
			state.token = null;
			state.errorMessage = action.payload;
		},
	},
});

export const { loginSuccess, loginFailure } = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
