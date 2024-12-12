import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
	const history = useHistory();

	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h1>Welcome to the Clinic</h1>
			<button
				onClick={() => history.push("/login")}
				style={{ marginRight: "20px" }}
			>
				Admin Login
			</button>
			<button onClick={() => history.push("/form")}>Fill Patient Form</button>
		</div>
	);
};

export default HomePage;
