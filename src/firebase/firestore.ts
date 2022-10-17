import { firestore } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

// Fetch a document from Firestore by collection and id
export const fetch = async (collection: string, id: string) => {
  try {
    const docRef = doc(firestore, collection, id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      throw new Error("Document doesn't exists");
    }
    return docSnap.data();
  } catch (error) {
    throw new Error(`Error fetching document: ${error.message}`);
  }
};
