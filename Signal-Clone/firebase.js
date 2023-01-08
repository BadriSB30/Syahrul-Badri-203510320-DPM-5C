import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  	apiKey: "AIzaSyA094jSEghFp3W0PRw8NIUjmtVeyEpYLoI",
  	authDomain: "signal-clone-6bc67.firebaseapp.com",
  	projectId: "signal-clone-6bc67",
  	storageBucket: "signal-clone-6bc67.appspot.com",
  	messagingSenderId: "454991886641",
  	appId: "1:454991886641:web:58f81823ddd0ce940f5810",
  	measurementId: "G-J3QDWWJX1C"
};

let firebaseApp;

if (firebase.apps.length === 0) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
