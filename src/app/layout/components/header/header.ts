import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../service/layout.service';
import { AuthService } from '../../../services/auth.service';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, Menu, StyleClassModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public authService = inject(AuthService);
  public layoutService = inject(LayoutService);
  private router = inject(Router);

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { separator: true },
      {
        label: 'Profile',
        icon: 'pi pi-user-edit',
        command: () => {
          this.router.navigate(['profile']);
        },
      },
      {
        label: 'Start Test',
        icon: 'pi pi-clock',
        command: () => {
          this.router.navigate(['test']);
        },
      },
      {
        label: 'View Results',
        icon: 'pi pi-chart-bar',
        command: () => {
          this.router.navigate(['results']);
        },
      },
      { separator: true },
    ];
  }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }

  public signOut(): void {
    this.authService.signOut().then(() => this.router.navigate(['/']));
  }
}
