const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Patient = require("../models/Patient");
const { authenticateJWT } = require("../middleware/auth");
const router = express.Router();

// Admin login route
router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const admin = await Admin.findOne({ username });

		if (!admin || !(await bcrypt.compare(password, admin.password))) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = jwt.sign(
			{ username: admin.username, role: "admin" },
			process.env.JWT_SECRET,
			{ expiresIn: "1h" }
		);

		res.json({ token });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
});

// Verify token endpoint
router.post("/verify-token", authenticateJWT, (req, res) => {
	res.json({ valid: true, user: req.user });
});

// Get all patients (protected admin route)
router.get("/patients", authenticateJWT, async (req, res) => {
	try {
		// Verify if the user is an admin
		if (req.user.role !== "admin") {
			return res.status(403).json({ message: "Access denied: Admin only" });
		}

		const patients = await Patient.find();
		res.json(patients);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
});

module.exports = router;
