import { Component, input } from '@angular/core';

type TStatistics = {
  id: string;
  gender: 'male' | 'female';
  age: number;
  score: number;
};

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss',
})
export class Statistics {
  public data = input<TStatistics[]>([]);

  ngOnInit(): void {
    console.log(this.data());
  }
}
