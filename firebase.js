import * as firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATL427GHdD0fv1IVZq8sbdv8tao1y0Ics",
  authDomain: "my-signal-clone.firebaseapp.com",
  projectId: "my-signal-clone",
  storageBucket: "my-signal-clone.appspot.com",
  messagingSenderId: "621503344194",
  appId: "1:621503344194:web:8603a429054115fc6807db",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };