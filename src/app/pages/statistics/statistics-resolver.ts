import { ResolveFn } from '@angular/router';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';

async function fetchAllStatistics() {
  const statsRef = collection(db, 'statistics');
  const snapshot = await getDocs(statsRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export const statisticsResolver: ResolveFn<any> = () => {
  return fetchAllStatistics();
};
