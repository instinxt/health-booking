import { createAsyncThunk } from "@reduxjs/toolkit";
import { submitPatientSuccess } from "../reducers/patientReducer";

export const submitPatientData = createAsyncThunk(
	"patients/submitPatient",
	async (patientData, { dispatch }) => {
		const response = await fetch("/api/patients", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(patientData),
		});

		const data = await response.json();

		if (response.ok) {
			dispatch(submitPatientSuccess(data));
			return data;
		} else {
			throw new Error(data.errors);
		}
	}
);
