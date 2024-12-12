import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useDispatch } from "react-redux";
import { submitPatientData } from "../actions/patientActions";

const MultiStepForm = () => {
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		appointmentReason: "",
	});

	const dispatch = useDispatch();

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
	};

	const handleSubmit = () => {
		dispatch(submitPatientData(formData));
		// Optionally reset form or redirect after submission.
		setFormData({
			name: "",
			email: "",
			phone: "",
			appointmentReason: "",
		});
		setStep(0); // Reset to first step after submission.
	};

	switch (step) {
		case 0:
			return (
				<Step1 next={nextStep} setFormData={setFormData} formData={formData} />
			);
		case 1:
			return (
				<Step2
					next={nextStep}
					prev={prevStep}
					setFormData={setFormData}
					formData={formData}
				/>
			);
		case 2:
			return (
				<Step3
					next={nextStep}
					prev={prevStep}
					setFormData={setFormData}
					formData={formData}
				/>
			);
		case 3:
			return (
				<Step4
					next={handleSubmit}
					prev={prevStep}
					setFormData={setFormData}
					formData={formData}
				/>
			);
		default:
			return null;
	}
};

export default MultiStepForm;
