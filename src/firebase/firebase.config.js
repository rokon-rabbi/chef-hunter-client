// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmrDADH4y9-zNWrrPVQtQWwjC4G1n1skU",
  authDomain: "chef-recipe-hunter-clien-b6606.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-b6606",
  storageBucket: "chef-recipe-hunter-clien-b6606.appspot.com",
  messagingSenderId: "596309604116",
  appId: "1:596309604116:web:8703fee3f3710b6d33f401"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;