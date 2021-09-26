import React, { useEffect, useState } from 'react';
import firebaseApp from 'configs/firebase-config';
import AuthRoutes from './auth-routes';
import { handle_logout } from 'services/firebase/login-services';

function MainRoutingHandler() {
	const [auth, setAuth] = useState(null);

	useEffect(() => {
		firebaseApp.auth().onAuthStateChanged((auth) => {
			setAuth(auth);
		});
	}, []);

	if (!auth) return <AuthRoutes />;

	return <button onClick={handle_logout}>Logout</button>;
}

export default MainRoutingHandler;
