import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './firebase.config';
import { AuthUser } from './services/auth-user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public authUserService = inject(AuthUser);

  constructor() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user, uid);
        this.authUserService.authUser.set(user);
        // ...
      } else {
        // User is signed out
        this.authUserService.authUser.set(null);
        console.log('signed out');
        // ...
      }
    });
  }
}
