import { Injectable, signal } from '@angular/core';
import {
  User,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebase.config';
import { BehaviorSubject } from 'rxjs';

const provider = new GoogleAuthProvider();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authUser = signal<User | null | undefined>(undefined);
  public currentUser = new BehaviorSubject<User | null | undefined>(undefined);

  constructor() {
    auth.useDeviceLanguage();
  }

  initAuth(): Promise<void> {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        this.currentUser.next(user);
        this.authUser.set(user);
        resolve();
      });
    });
  }

  get user$() {
    return this.currentUser.asObservable();
  }

  get user() {
    return this.currentUser.value;
  }

  public signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  public signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  public resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email);
  }

  public googleSignIn(): Promise<UserCredential> {
    return signInWithPopup(auth, provider);
  }

  public signOut(): Promise<void> {
    return signOut(auth);
  }
}
