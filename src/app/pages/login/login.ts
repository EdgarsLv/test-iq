import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, PasswordModule, InputTextModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public authService = inject(AuthService);

  email: string = '';

  password: string = '';

  public async loginWithGoogle(): Promise<void> {
    try {
      const userCred = await this.authService.googleSignIn();
      console.log('User:', userCred.user);
    } catch (err) {
      console.error('Login error:', err);
    }
  }
}
