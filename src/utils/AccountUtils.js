import { database, auth, firestore } from "../config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, linkWithCredential, signInWithEmailAndPassword, signInWithPopup, fetchSignInMethodsForEmail } from "firebase/auth";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { showNotification } from "./Notification";

async function getUserData() {
  try {
    const querySnapshot = await getDocs(collection(firestore, "user-data"));
    const userData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return userData;
  }
  catch (error) {
    console.error("Error getting user data: ", error);
  }
}

async function registerByEmailAndPassword(email, name, password, confirmPassword) {
  try {
    if(password !== confirmPassword){
      alert("please comfirm your password again!");
      return false;
    }
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    console.log("User registered: ", user);
    await loginByEmailAndPassword(email, password);
    await setDoc(doc(firestore, "user-data", user.uid), {
      email: email,
      registerTime: new Date().toISOString(),
    }, {merge: true});
    await setUserName(name ? name : email.split('@')[0]);
    return true;
  }
  catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error registering: ", errorCode, errorMessage);
    return false;
  }
}

async function setUserName(name) {
  try {
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(firestore, "user-data", user.uid), {
        name: name,
      }, {merge: true});
      console.log("User name set: ", name);
    } else {
      console.error("No user is currently signed in.");
    }
  }
  catch (error) {
    console.error("Error setting user name: ", error);
  }
}

async function loginByEmailAndPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await showNotification("Login Success!", "Welcome , " + user.displayName + "!");
    console.log("User logged in: ", user);
    return true;
  }
  catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error logging in: ", errorCode, errorMessage);
    return false;
  }
}

function logout() {
  try {
    auth.signOut().then(() => {
      console.log("User logged out");
    }).catch((error) => {
      console.error("Error logging out: ", error);
    });
  }
  catch (error) {
    console.error("Error logging out: ", error);
  }
}

async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await setDoc(doc(firestore, "user-data", user.uid), {
      email: user.email,
      registerTime: new Date().toISOString(),
    });
    await setUserName(user.displayName ? user.displayName : user.email.split('@')[0]);
    showNotification("Login Success!", "Welcome , " + user.displayName + "!");
    console.log("User logged in with Google: ", user);
    return true;
  }
  catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error logging in with Google: ", errorCode, errorMessage);
    return false;
  }
}

export { getUserData, loginByEmailAndPassword, loginWithGoogle, logout, setUserName, registerByEmailAndPassword }


