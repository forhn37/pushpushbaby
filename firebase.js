// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeBJj9j77NFUBqLbZH8lpWj-SP9QHLSh8",
  authDomain: "pushtest-ce691.firebaseapp.com",
  projectId: "pushtest-ce691",
  storageBucket: "pushtest-ce691.appspot.com",
  messagingSenderId: "777391297820",
  appId: "1:777391297820:web:47e2fc01c6eefdce4a16d9",
  measurementId: "G-BZ2LWJSB86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);