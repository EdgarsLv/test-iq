// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBG3NcyGVmo_sIc4_-JBSB4YXSQOQqKkac',
  authDomain: 'iq-test-a907f.firebaseapp.com',
  projectId: 'iq-test-a907f',
  storageBucket: 'iq-test-a907f.firebasestorage.app',
  messagingSenderId: '997848554751',
  appId: '1:997848554751:web:c7c71e0f6f93bbf4ba40ca',
  measurementId: 'G-H95RFYG6NN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
