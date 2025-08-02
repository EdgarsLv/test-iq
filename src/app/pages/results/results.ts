import { Component, computed, inject, resource, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsWidget } from '../../components/stats-widget/stats-widget';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import {
  TestResult as TestResultService,
  TTestResult,
} from '../../services/test-result';
import { AuthService } from '../../services/auth.service';

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
  public testResultService = inject(TestResultService);
  public authService = inject(AuthService);

  public stats = computed<TestStats>(() => this.getStats());
  public curretLevel = computed(() => this.getCurrentLevel());
  public consistency = computed(() => this.getConsistency());

  public user = this.authService.authUser;

  public results = resource({
    params: () => this.user()?.uid,
    loader: ({ params }) =>
      this.testResultService.getTestResultsByUserId(params),
  });

  public timeInMinutes(result: TTestResult): number {
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
    const result = this.results.value() || [];

    const scores = result.map((r) => r.score);
    const avgScore = Math.round(
      scores.reduce((a, b) => a + b, 0) / scores.length
    );
    const currentScore = result.at(-1)?.score ?? 0;
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);
    const totalTime = result.reduce((sum, r) => sum + r.timeSpent, 0);
    const avgTime = Math.round(totalTime / result.length / 60);

    const stats = {
      currentScore,
      average: avgScore,
      highest: maxScore,
      lowest: minScore,
      totalTests: result.length,
      averageTime: avgTime,
      improvement:
        result.length > 1 ? scores[scores.length - 1] - scores[0] : 0,
    };

    return stats;
  }

  public progressWidth(result: TTestResult): any {
    return `${Math.min((result.score / 150) * 100, 100)}`;
  }

  public getScoreColor(score: number): string {
    if (score >= 130) return 'contrast';
    if (score >= 115) return 'info';
    if (score >= 100) return 'success';
    if (score >= 85) return 'warn';
    return 'danger';
  }

  public getScoreLevel(score: number): string {
    if (score >= 130) return 'purple';
    if (score >= 115) return 'blue';
    if (score >= 100) return 'green';
    if (score >= 85) return 'orange';
    return 'red';
  }

  public getScoreGradient(score: number): string {
    if (score >= 130) return 'bg-gradient-to-r from-purple-600 to-pink-600';
    if (score >= 115) return 'bg-gradient-to-r from-blue-600 to-cyan-600';
    if (score >= 100) return 'bg-gradient-to-r from-green-600 to-emerald-600';
    if (score >= 85) return 'bg-gradient-to-r from-yellow-600 to-orange-600';
    return 'bg-gradient-to-r from-red-600 to-rose-600';
  }
}
