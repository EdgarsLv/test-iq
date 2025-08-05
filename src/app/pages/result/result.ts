import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

type TResult = {
  date: string;
  score: number;
  timeSpent: number;
};

@Component({
  selector: 'app-result',
  imports: [CommonModule],
  templateUrl: './result.html',
  styleUrl: './result.scss',
})
export class Result {
  public result = input<TResult>();
}
