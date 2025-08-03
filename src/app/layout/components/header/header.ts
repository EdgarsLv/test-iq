import { CommonModule } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  public data = model<any>();

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { separator: true },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: '/',
          },
          {
            label: 'Profile',
            icon: 'pi pi-user-edit',
            routerLink: 'profile',
          },
          {
            label: 'Start Test',
            icon: 'pi pi-clock',
            routerLink: 'test',
          },
          {
            label: 'View Results',
            icon: 'pi pi-chart-bar',
            routerLink: 'results',
          },
        ],
      },
    ];
  }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }

  public signOut(): void {
    this.authService.signOut();
  }
}
