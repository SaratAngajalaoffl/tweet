import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginScreen from 'screens/auth/login/LoginScreen';
import SignupScreen from 'screens/auth/signup/SignupScreen';

function AuthRoutes() {
	return (
		<Switch>
			<Route exact path='/' component={LoginScreen} />
			<Route exact path='/signup' component={SignupScreen} />
		</Switch>
	);
}

export default AuthRoutes;
