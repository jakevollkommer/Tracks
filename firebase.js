import firebase from "firebase/app";
// Handle firebase init in a separate file
import "./firebaseConfig";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

if (window.location.hostname === "localhost") {
  // This is required for testing with cypress
  firestore.settings({
    experimentalForceLongPolling: true,
    merge: true,
  });

  firestore.useEmulator("localhost", 8080);
  functions.useEmulator("localhost", 5001);
  auth.useEmulator('http://localhost:9099/', { disableWarnings: true });
}

export {
  auth,
  firestore,
  functions,
  storage,
};

