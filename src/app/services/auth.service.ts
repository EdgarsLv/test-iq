import { Injectable, signal } from '@angular/core';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authUser = signal<User | null | undefined>(undefined);
  public currentUser = new BehaviorSubject<User | null | undefined>(undefined);

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
}
