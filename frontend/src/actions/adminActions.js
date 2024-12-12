import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginSuccess, loginFailure } from "../reducers/adminReducer";

export const loginAdmin = (credentials) => async (dispatch) => {
	try {
		const response = await fetch("/api/admin/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(credentials),
		});

		const data = await response.json();

		if (response.ok) {
			localStorage.setItem("token", data.token);
			dispatch(loginSuccess(data.token));
		} else {
			dispatch(loginFailure(data.message));
		}
	} catch (error) {
		dispatch(loginFailure("An error occurred"));
	}
};

export const fetchPatients = createAsyncThunk(
	"patients/fetchPatients",
	async (_, { dispatch }) => {
		const token = localStorage.getItem("token");
		const response = await fetch("/api/patients", {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` },
		});

		const data = await response.json();

		if (response.ok) {
			dispatch(fetchPatientsSuccess(data));
		} else {
			dispatch(fetchPatientsFailure());
		}
	}
);
