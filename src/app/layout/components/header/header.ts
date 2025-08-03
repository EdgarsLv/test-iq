import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../service/layout.service';
import { AuthService } from '../../../services/auth.service';
import { ButtonModule } from 'primeng/button';
import { Popover } from 'primeng/popover';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    CommonModule,
    PopoverModule,

    StyleClassModule,
    ButtonModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public authService = inject(AuthService);
  public layoutService = inject(LayoutService);
  private router = inject(Router);

  @ViewChild('op') op!: Popover;

  items: any[] = [];

  toggle(event: any) {
    this.op.toggle(event);
  }

  public close(): void {
    this.op.hide();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Start Test',
        icon: 'pi pi-clock',
        link: 'test',
      },
      {
        label: 'View Results',
        icon: 'pi pi-chart-bar',
        link: 'results',
      },
      {
        label: 'View Statistics',
        icon: 'pi pi-chart-scatter',
        link: 'statistics',
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
    this.authService.signOut().then(() => this.router.navigate(['/']));
  }
}
