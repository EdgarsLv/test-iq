import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StatsWidget } from '../../components/statswidget';

@Component({
  selector: 'app-profile',
  imports: [ButtonModule, StatsWidget],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {}
