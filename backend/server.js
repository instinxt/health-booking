const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
app.use(bodyParser.json());

// MongoDB connection and admin initialization
mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(async () => {
		console.log("Connected to MongoDB");
		// Initialize admin user
		const Admin = require("./models/Admin");
		const bcrypt = require("bcrypt");

		const existingAdmin = await Admin.findOne({ username: "admin" });
		if (!existingAdmin) {
			const hashedPassword = await bcrypt.hash("admin123", 10);
			const admin = new Admin({ username: "admin", password: hashedPassword });
			await admin.save();
			console.log("Admin user created");
		}
	})
	.catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
