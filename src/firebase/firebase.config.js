// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLdNgWu_GldlI2RexSqWGVs8vdahALzUk",
  authDomain: "chef-recipe-hunting-55b0d.firebaseapp.com",
  projectId: "chef-recipe-hunting-55b0d",
  storageBucket: "chef-recipe-hunting-55b0d.appspot.com",
  messagingSenderId: "643874940048",
  appId: "1:643874940048:web:8163d65d16b04a5c4a6415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;