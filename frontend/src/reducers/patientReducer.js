import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
	name: "patients",
	initialState: [],
	reducers: {
		fetchPatientsSuccess: (state, action) => {
			return action.payload;
		},
		fetchPatientsFailure: () => {
			return [];
		},
		submitPatientSuccess: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const {
	fetchPatientsSuccess,
	fetchPatientsFailure,
	submitPatientSuccess,
} = patientSlice.actions;
export const patientReducer = patientSlice.reducer;
