import { setGlobalOptions } from 'firebase-functions';
import * as functions from 'firebase-functions/v1';
import * as admin from 'firebase-admin';

setGlobalOptions({ maxInstances: 10 });

admin.initializeApp();
const db = admin.firestore();

exports.createNewUserDocument = functions.auth.user().onCreate(async (user) => {
  const userRef = db.collection('users').doc(user.uid);

  try {
    await userRef.set({
      email: user.email,
      displayName: user.displayName || null,
      photoURL: user.photoURL || null,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log(`User document created for ${user.uid}`);
  } catch (error) {
    console.error(`Error creating user document for ${user.uid}:`, error);
  }
});

exports.onTestCompleted = functions.firestore
  .document('users/{userId}/testResults/{testId}')
  .onCreate(async (snapshot, context) => {
    const { userId, testId } = context.params;
    const testResultData = snapshot.data();

    const userRef = db.doc(`users/${userId}`);
    const userSnap = await userRef.get();

    if (!userSnap.exists) return;

    const userData = userSnap.data();

    const statData = {
      timeSpent: testResultData.timeSpent,
      score: testResultData.score,
      date: testResultData.date,
      age: userData?.age,
      gender: userData?.gender,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection('statistics').doc(testId).set(statData);
  });
