// Handle firebase init in a separate file
import app from './firebase-config';

import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage();
export const functions = getFunctions();

// Use emulators if we are not in production
if (process.env.NODE_ENV !== "production") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(firestore, 'localhost', 8080);
  connectStorageEmulator(storage, "localhost", 9199);
  connectFunctionsEmulator(functions, 'localhost', 5001);
}
