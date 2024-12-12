import React from "react";

const Step4 = ({ next, prev, setFormData, formData }) => {
	const handleChange = (e) => {
		setFormData({ ...formData, appointmentReason: e.target.value });
	};

	return (
		<div>
			<h2>Reason for Appointment</h2>
			<textarea
				value={formData.appointmentReason}
				onChange={handleChange}
				required
			/>
			<button onClick={prev}>Previous</button>
			<button onClick={next}>Submit</button>
		</div>
	);
};

export default Step4;
