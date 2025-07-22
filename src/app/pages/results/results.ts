import { Component, computed, signal } from '@angular/core';
import { TestResult } from '../test/test';
import { CommonModule } from '@angular/common';
import { StatsWidget } from '../../components/stats-widget/stats-widget';
import { AvatarModule } from 'primeng/avatar';

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
  imports: [CommonModule, StatsWidget, AvatarModule],
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

  //   const stats = useMemo(() => {
  //   if (!results || results.length === 0) return null;

  //   const scores = results.map(r => r.score);
  //   const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  //   const maxScore = Math.max(...scores);
  //   const minScore = Math.min(...scores);
  //   const totalTime = results.reduce((sum, r) => sum + r.timeSpent, 0);
  //   const avgTime = Math.round(totalTime / results.length / 60);

  //   return {
  //     average: avgScore,
  //     highest: maxScore,
  //     lowest: minScore,
  //     totalTests: results.length,
  //     averageTime: avgTime,
  //     improvement: results.length > 1 ? scores[scores.length - 1] - scores[0] : 0
  //   };
  // }, [results]);

  public progressWidth(result: TestResult): any {
    return `${Math.min((result.iqScore / 150) * 100, 100)}%`;
  }

  public getScoreColor(score: number): string {
    if (score >= 130) return 'purple';
    if (score >= 115) return 'blue';
    if (score >= 100) return 'green';
    if (score >= 85) return 'yellow';
    return 'red';
  }

  public getScoreGradient(score: number): string {
    if (score >= 130) return 'from-purple-600 to-pink-600';
    if (score >= 115) return 'from-blue-600 to-cyan-600';
    if (score >= 100) return 'from-green-600 to-emerald-600';
    if (score >= 85) return 'from-yellow-600 to-orange-600';
    return 'from-red-600 to-rose-600';
  }
}
