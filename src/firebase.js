// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeEzDwLy-UunJH3WR0-DoX_TrAGnOphns",
  authDomain: "react-disney-plus-661c7.firebaseapp.com",
  projectId: "react-disney-plus-661c7",
  storageBucket: "react-disney-plus-661c7.appspot.com",
  messagingSenderId: "310614798952",
  appId: "1:310614798952:web:c12e54fc0ab702a8af01dd",
  measurementId: "G-36NDBWMYHL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
