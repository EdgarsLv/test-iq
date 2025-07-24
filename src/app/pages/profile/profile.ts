import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

const provider = new GoogleAuthProvider();

@Component({
  selector: 'app-profile',
  imports: [InputTextModule, FormsModule, ButtonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  public email = '';
  public password = '';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const auth = getAuth();
    auth.useDeviceLanguage();
  }

  public signUp(): void {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }

  public signIn(): void {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  public googleSignIn(): void {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        console.log(user, token);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  public signOut(): void {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
}

// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";

// Initialize Firebase Admin SDK (required to interact with Firestore from a Function)
// admin.initializeApp();
// const db = admin.firestore();

// exports.createNewUserDocument = functions.auth.user().onCreate(async (user) => {
//   // 'user' object contains details from Firebase Authentication
//   const userRef = db.collection("users").doc(user.uid);

//   try {
//     await userRef.set({
//       email: user.email,
//       displayName: user.displayName || null,
//       photoURL: user.photoURL || null,
//       createdAt: admin.firestore.FieldValue.serverTimestamp(), // Use server timestamp for accuracy
//       // You can add more default fields here
//     });
//     console.log(`User document created for ${user.uid}`);
//   } catch (error) {
//     console.error(`Error creating user document for ${user.uid}:`, error);
//   }
// });
