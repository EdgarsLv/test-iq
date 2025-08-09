import { Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

type Questions = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  difficulty: string;
};

@Component({
  selector: 'app-iq-test',
  imports: [ButtonModule],
  templateUrl: './iq-test.html',
  styleUrl: './iq-test.scss',
})
export class IqTest {
  public questions = signal<Questions[]>(questions);
  public currentQuestion = signal<number>(0);
  public question = computed<Questions>(
    () => this.questions()[this.currentQuestion()]
  );

  public nextQuestion = () => {
    if (this.currentQuestion() < this.questions().length - 1) {
      this.currentQuestion.set(this.currentQuestion() + 1);
    }
  };

  public prevQuestion = () => {
    if (this.currentQuestion() > 0) {
      this.currentQuestion.set(this.currentQuestion() - 1);
    }
  };
}

const questions = [
  {
    id: 1,
    question: 'assets/images/questions/1.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'assets/images/questions/2.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'assets/images/questions/3.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
];
