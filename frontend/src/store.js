import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer";
import { patientReducer } from "./reducers/patientReducer";

const store = configureStore({
	reducer: {
		admin: adminReducer,
		patients: patientReducer,
	},
});

export default store;
