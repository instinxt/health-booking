import React from "react";

const Step3 = ({ next, prev, setFormData, formData }) => {
	const handleChange = (e) => {
		setFormData({ ...formData, phone: e.target.value });
	};

	return (
		<div>
			<h2>Enter Your Phone Number</h2>
			<input
				type="tel"
				value={formData.phone}
				onChange={handleChange}
				required
			/>
			<button onClick={prev}>Previous</button>
			<button onClick={next}>Next</button>
		</div>
	);
};

export default Step3;
