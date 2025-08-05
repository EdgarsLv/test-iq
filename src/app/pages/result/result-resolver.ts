import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';

export const resultResolver: ResolveFn<any> = async (route) => {
  const authService = inject(AuthService);
  const user = authService.authUser();

  const id = route.paramMap.get('id');

  if (!user || !id) return null;

  const docRef = doc(db, `users/${user.uid}/testResults/${id}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};
