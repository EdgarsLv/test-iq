import { Component, computed, signal } from '@angular/core';
import { TestResult } from '../test/test';
import { CommonModule } from '@angular/common';
import { StatsWidget } from '../../components/stats-widget/stats-widget';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';

type TestStats = {
  average: number;
  highest: number;
  lowest: number;
  totalTests: number;
  averageTime: number;
  improvement: number;
  currentScore: number;
};

@Component({
  selector: 'app-results',
  imports: [
    CommonModule,
    StatsWidget,
    ProgressBarModule,
    AvatarModule,
    TagModule,
    TableModule,
  ],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class Results {
  public testResults = signal<TestResult[]>([]);
  public stats = computed<TestStats>(() => this.getStats());
  public curretLevel = computed(() => this.getCurrentLevel());
  public consistency = computed(() => this.getConsistency());

  ngOnInit(): void {
    const testResults = JSON.parse(
      localStorage.getItem('iqTestResults') || '[]'
    );

    this.testResults.set(testResults);
  }

  public timeInMinutes(result: TestResult): number {
    return Math.round(result.timeSpent / 60);
  }

  private getConsistency(): string {
    return Math.abs(this.stats().highest - this.stats().lowest) <= 10
      ? 'Very High'
      : Math.abs(this.stats().highest - this.stats().lowest) <= 20
      ? 'High'
      : Math.abs(this.stats().highest - this.stats().lowest) <= 30
      ? 'Moderate'
      : 'Variable';
  }

  private getCurrentLevel(): string {
    return this.stats().average >= 130
      ? 'Exceptional'
      : this.stats().average >= 115
      ? 'Above Average'
      : this.stats().average >= 100
      ? 'Average'
      : this.stats().average >= 85
      ? 'Below Average'
      : 'Low';
  }

  private getStats(): TestStats {
    const scores = this.testResults().map((r) => r.iqScore);
    const avgScore = Math.round(
      scores.reduce((a, b) => a + b, 0) / scores.length
    );
    const currentScore = this.testResults().at(-1)?.iqScore ?? 0;
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);
    const totalTime = this.testResults().reduce(
      (sum, r) => sum + r.timeSpent,
      0
    );
    const avgTime = Math.round(totalTime / this.testResults().length / 60);

    const stats = {
      currentScore,
      average: avgScore,
      highest: maxScore,
      lowest: minScore,
      totalTests: this.testResults().length,
      averageTime: avgTime,
      improvement:
        this.testResults().length > 1
          ? scores[scores.length - 1] - scores[0]
          : 0,
    };

    return stats;
  }

  public progressWidth(result: TestResult): any {
    return `${Math.min((result.iqScore / 150) * 100, 100)}`;
  }

  public getScoreColor(score: number): string {
    if (score >= 130) return 'contrast';
    if (score >= 115) return 'info';
    if (score >= 100) return 'success';
    if (score >= 85) return 'warn';
    return 'danger';
  }

  public getScoreGradient(score: number): string {
    if (score >= 130) return 'bg-gradient-to-r from-purple-600 to-pink-600';
    if (score >= 115) return 'bg-gradient-to-r from-blue-600 to-cyan-600';
    if (score >= 100) return 'bg-gradient-to-r from-green-600 to-emerald-600';
    if (score >= 85) return 'bg-gradient-to-r from-yellow-600 to-orange-600';
    return 'bg-gradient-to-r from-red-600 to-rose-600';
  }
}
