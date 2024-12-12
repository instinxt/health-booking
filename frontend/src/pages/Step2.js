import React from "react";

const Step2 = ({ next, prev, setFormData, formData }) => {
	const handleChange = (e) => {
		setFormData({ ...formData, email: e.target.value });
	};

	return (
		<div>
			<h2>Enter Your Email</h2>
			<input
				type="email"
				value={formData.email}
				onChange={handleChange}
				required
			/>
			<button onClick={prev}>Previous</button>
			<button onClick={next}>Next</button>
		</div>
	);
};

export default Step2;
