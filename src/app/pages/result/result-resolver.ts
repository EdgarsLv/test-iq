import { ResolveFn } from '@angular/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';

export const resultResolver: ResolveFn<any> = async (route) => {
  const id = route.paramMap.get('id');

  if (!id) return null;

  const docRef = doc(db, `statistics/${id}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};
