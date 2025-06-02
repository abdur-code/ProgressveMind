// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "progressivemind-8f23d.firebaseapp.com",
  projectId: "progressivemind-8f23d",
  storageBucket: "progressivemind-8f23d.firebasestorage.app",
  messagingSenderId: "1065099115281",
  appId: "1:1065099115281:web:045bb7832b14c5b0592ab0",
  measurementId: "G-ZKJVWDSXFN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);