import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// Sign in with Firebase Auth and return the user object promise
export const signIn = async (email: string, password: string) => {
  console.log("Signing in with Firebase...");
  // Use Firebase Auth sign-in method
  const credential = await signInWithEmailAndPassword(auth, email, password);
  const user = credential.user;
  return user;
};

// Sign up with Firebase Auth and return the user object promise
export const signUp = async (email: string, password: string) => {
  // Use Firebase Auth sign-up method
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  const user = credential.user;
  return user;
};

// Subscribe to the changing auth
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(`Firebase user ${uid} signed in.`);
  } else {
    console.log(`Firebase user signed out.`);
  }
});
