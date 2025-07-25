import { Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TTestResult } from '../../services/test-result';

@Component({
  selector: 'app-home',
  imports: [ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public testResults = signal<TTestResult[]>([]);
  public curretScore = computed(() => this.testResults().at(-1)?.score ?? 0);

  ngOnInit(): void {
    const testResults = JSON.parse(
      localStorage.getItem('iqTestResults') || '[]'
    );

    this.testResults.set(testResults);
  }
}
