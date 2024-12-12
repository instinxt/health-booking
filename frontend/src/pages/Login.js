import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../actions/adminActions";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginAdmin({ username, password }));
		setUsername("");
		setPassword("");

		// Optionally handle success/error messages here.

		// Redirect to dashboard after successful login.
		// You can use react-router for navigation.

		// Example:
		// history.push('/dashboard');

		// Note: You would need to implement routing.

		// Uncomment below line to reset fields after submission.
		// setUsername('');
		// setPassword('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				required
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<button type="submit">Login</button>
		</form>
	);
};

export default Login;
