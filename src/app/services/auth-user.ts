import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthUser {
  public authUser = signal<any>(null);
}
