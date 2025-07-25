import { Injectable, signal } from '@angular/core';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authUser = signal<User | null>(null);

  initAuth(): Promise<void> {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        this.authUser.set(user);
        resolve();
      });
    });
  }
}
