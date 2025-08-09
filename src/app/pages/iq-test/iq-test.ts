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
  {
    id: 4,
    question: 'assets/images/questions/4.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'assets/images/questions/5.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'assets/images/questions/6.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'assets/images/questions/7.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'assets/images/questions/8.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 9,
    question: 'assets/images/questions/9.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 10,
    question: 'assets/images/questions/10.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 11,
    question: 'assets/images/questions/11.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 12,
    question: 'assets/images/questions/12.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 13,
    question: 'assets/images/questions/13.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 14,
    question: 'assets/images/questions/14.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 15,
    question: 'assets/images/questions/15.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 16,
    question: 'assets/images/questions/16.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 17,
    question: 'assets/images/questions/17.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 18,
    question: 'assets/images/questions/18.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 19,
    question: 'assets/images/questions/19.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 20,
    question: 'assets/images/questions/20.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 21,
    question: 'assets/images/questions/21.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 22,
    question: 'assets/images/questions/22.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 23,
    question: 'assets/images/questions/23.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 24,
    question: 'assets/images/questions/24.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 25,
    question: 'assets/images/questions/25.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 26,
    question: 'assets/images/questions/26.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 27,
    question: 'assets/images/questions/27.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 28,
    question: 'assets/images/questions/28.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 29,
    question: 'assets/images/questions/29.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 30,
    question: 'assets/images/questions/30.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 31,
    question: 'assets/images/questions/31.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 32,
    question: 'assets/images/questions/32.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 33,
    question: 'assets/images/questions/33.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 34,
    question: 'assets/images/questions/34.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 35,
    question: 'assets/images/questions/35.png',
    options: ['24', '32', '30', '28'],
    correct: 1,
    difficulty: 'easy',
  },
];
