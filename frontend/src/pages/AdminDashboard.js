import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../actions/adminActions";

const AdminDashboard = () => {
	const dispatch = useDispatch();

	// Get patients from Redux store
	const patients = useSelector((state) => state.patients);

	useEffect(() => {
		dispatch(fetchPatients());
	}, [dispatch]);

	return (
		<div>
			<h1>Patient Data</h1>
			<ul>
				{patients.map((patient) => (
					<li key={patient._id}>
						{patient.name} - {patient.email} - {patient.phone}
					</li>
				))}
			</ul>
		</div>
	);
};

export default AdminDashboard;
