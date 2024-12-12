const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");
const { authenticateJWT } = require("../middleware/auth");

// Check if phone number exists
router.post("/check-phone", async (req, res) => {
	try {
		const { phoneNumber } = req.body;
		const existingUser = await Patient.findOne({ phoneNumber });

		if (existingUser) {
			return res.json({ exists: true });
		}
		return res.json({ exists: false });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
});

// Submit new patient
router.post("/", async (req, res) => {
	try {
		const patient = new Patient(req.body);
		await patient.save();
		res.status(201).json(patient);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// Get all patients (protected route)
router.get("/", authenticateJWT, async (req, res) => {
	try {
		const patients = await Patient.find();
		res.json(patients);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
