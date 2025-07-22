import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stats-widget',
  imports: [],
  templateUrl: './stats-widget.html',
  styleUrl: './stats-widget.scss',
})
export class StatsWidget {
  public text = input.required<string>();
  public score = input.required<number>();
  public icon = input.required<string>();
}
