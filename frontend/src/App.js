import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import MultiStepForm from "./pages/MultiStepForm";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/login" component={Login} />
				<Route path="/form" component={MultiStepForm} />
				<Route path="/dashboard" component={AdminDashboard} />
			</Switch>
		</Router>
	);
}

export default App;
