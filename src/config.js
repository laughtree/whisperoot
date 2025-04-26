// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaj5jtpkm06ve2wIB3Xa-gXRJb2w84UgE",
  authDomain: "whisperoot-579d7.firebaseapp.com",
  databaseURL: "https://whisperoot-579d7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whisperoot-579d7",
  storageBucket: "whisperoot-579d7.firebasestorage.app",
  messagingSenderId: "401742534790",
  appId: "1:401742534790:web:3066414717af1fcf42d907",
  measurementId: "G-THXELRQ0NZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
// const messaging = getMessaging(app);
// const msgToken = getToken(messaging, { vapidKey: "BFiSQuqDmjD0PRrUkpBDTABdH7ggVnO4FJq5m1F9M19teRrepc8wAJ3W_VBECihcgp0J1xtrDNt1gROZh1pcHbg" });

export { app, analytics, database, auth, firestore/*, messaging, msgToken*/ };
