import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public authService = inject(AuthService);
  public router = inject(Router);

  public user = this.authService.authUser;

  public setProfile(): void {
    this.router.navigate(['profile']);
  }

  public startTest(): void {
    this.router.navigate(['test']);
  }

  public viewResult(): void {
    this.router.navigate(['results']);
  }

  public async loginWithGoogle(): Promise<void> {
    try {
      const userCred = await this.authService.googleSignIn();
      console.log('User:', userCred.user);
    } catch (err) {
      console.error('Login error:', err);
    }
  }
}
