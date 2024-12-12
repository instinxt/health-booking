import React from "react";

const Step1 = ({ next, setFormData, formData }) => {
	const handleChange = (e) => {
		setFormData({ ...formData, name: e.target.value });
	};

	return (
		<div>
			<h2>Enter Your Name</h2>
			<input
				type="text"
				value={formData.name}
				onChange={handleChange}
				required
			/>
			<button onClick={next}>Next</button>
		</div>
	);
};

export default Step1;
