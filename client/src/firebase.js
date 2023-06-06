// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

//using google authentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfpkDdTNXzC6N5SKyTUC0DWTkAbDYHY3g",
  authDomain: "realtime-chatapp-48623.firebaseapp.com",
  projectId: "realtime-chatapp-48623",
  storageBucket: "realtime-chatapp-48623.appspot.com",
  messagingSenderId: "322112262821",
  appId: "1:322112262821:web:778864811af39b2b8bf34c",
  measurementId: "G-NMK2D8F6FX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
