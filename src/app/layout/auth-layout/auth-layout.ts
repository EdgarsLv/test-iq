import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, Header, Footer, ProgressBarModule],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {}
