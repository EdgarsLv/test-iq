import { Injectable } from '@angular/core';
import {
  getDocs,
  collection,
  query,
  orderBy,
  addDoc,
} from 'firebase/firestore';
import { db } from '../firebase.config';

export type TTestResult = {
  id: string;
  score: number;
  timeSpent: number;
  date: string;
  order: number;
};

@Injectable({
  providedIn: 'root',
})
export class TestResult {
  public async getTestResultsByUserId(userId: string): Promise<TTestResult[]> {
    const testResultsRef = collection(db, `users/${userId}/testResults`);
    const q = query(testResultsRef, orderBy('date', 'asc'));

    const snapshot = await getDocs(q);

    const testResults: TTestResult[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<TTestResult, 'id'>),
    }));

    return testResults;
  }

  public async storeTestResult(
    result: TTestResult,
    userId: string
  ): Promise<string> {
    const docRef = await addDoc(
      collection(db, `users/${userId}/testResults`),
      result
    );
    return docRef.id;
  }
}
