import 'firebase/analytics';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL35pxrORW-i-0_CqpYuiPclyR-NEysgg",
  authDomain: "chat-app-55973.firebaseapp.com",
  projectId: "chat-app-55973",
  storageBucket: "chat-app-55973.appspot.com",
  messagingSenderId: "237972619924",
  appId: "1:237972619924:web:d55a791968b2e357e42a81",
  measurementId: "G-5317N0J2L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const auth = getAuth();


if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { auth };
export default auth;
