// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEoIkRpRr61jpL3N7T3BcerXOj0a62KBQ",
  authDomain: "netflixclone-5a8c1.firebaseapp.com",
  projectId: "netflixclone-5a8c1",
  storageBucket: "netflixclone-5a8c1.appspot.com",
  messagingSenderId: "566335791259",
  appId: "1:566335791259:web:8889902697b522f7f0a63e",
  measurementId: "G-XXE60TJMRH",
  databaseURL:'https://netflixclone-5a8c1-default-rtdb.firebaseio.com'
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);