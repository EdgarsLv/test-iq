import { computed, Injectable, signal } from '@angular/core';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthUser {
  public authUser = signal<User | null>(null);
  public userId = computed<string | undefined>(() => this.authUser()?.uid);
}
