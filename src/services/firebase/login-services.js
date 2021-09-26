import firebaseApp from 'configs/firebase-config';
import firebase from 'firebase';

export const handle_email_password_login = async (email, password) => {
	return await firebaseApp.auth().signInWithEmailAndPassword(email, password);
};

export const handle_email_password_signup = async (email, password) => {
	return await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
};

export const handle_gmail_login = async () => {
	var provider = new firebase.auth.GoogleAuthProvider();

	return await firebaseApp.auth().signInWithPopup(provider);
};

export const handle_facebook_login = async () => {
	var provider = new firebase.auth.FacebookAuthProvider();

	return await firebaseApp.auth().signInWithPopup(provider);
};

export const handle_github_login = async () => {
	var provider = new firebase.auth.GithubAuthProvider();

	return await firebaseApp.auth().signInWithPopup(provider);
};

export const handle_logout = async () => {
	return firebaseApp.auth().signOut();
};
