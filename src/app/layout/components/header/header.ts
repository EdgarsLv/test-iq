import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, StyleClassModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(public layoutService: LayoutService) {}

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }
}
