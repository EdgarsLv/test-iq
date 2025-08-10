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
  public questionOptions = computed(() => this.question().options);

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

const questionUrl = 'assets/images/questions/';
const answerUrl = 'assets/images/answers/';

const questions = [
  {
    id: 1,
    question: `${questionUrl}1.png`,
    options: [
      `${answerUrl}11.png`,
      `${answerUrl}12.png`,
      `${answerUrl}13.png`,
      `${answerUrl}14.png`,
      `${answerUrl}15.png`,
      `${answerUrl}16.png`,
    ],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'assets/images/questions/2.png',
    options: [
      `${answerUrl}21.png`,
      `${answerUrl}22.png`,
      `${answerUrl}23.png`,
      `${answerUrl}24.png`,
      `${answerUrl}25.png`,
      `${answerUrl}26.png`,
    ],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'assets/images/questions/3.png',
    options: [
      `${answerUrl}31.png`,
      `${answerUrl}32.png`,
      `${answerUrl}33.png`,
      `${answerUrl}34.png`,
      `${answerUrl}35.png`,
      `${answerUrl}36.png`,
    ],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'assets/images/questions/4.png',
    options: [
      `${answerUrl}41.png`,
      `${answerUrl}42.png`,
      `${answerUrl}43.png`,
      `${answerUrl}44.png`,
      `${answerUrl}45.png`,
      `${answerUrl}46.png`,
    ],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'assets/images/questions/5.png',
    options: [
      `${answerUrl}51.png`,
      `${answerUrl}52.png`,
      `${answerUrl}53.png`,
      `${answerUrl}54.png`,
      `${answerUrl}55.png`,
      `${answerUrl}56.png`,
    ],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'assets/images/questions/6.png',
    options: [
      `${answerUrl}61.png`,
      `${answerUrl}62.png`,
      `${answerUrl}63.png`,
      `${answerUrl}64.png`,
      `${answerUrl}65.png`,
      `${answerUrl}66.png`,
    ],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'assets/images/questions/7.png',
    options: [
      `${answerUrl}71.png`,
      `${answerUrl}72.png`,
      `${answerUrl}73.png`,
      `${answerUrl}74.png`,
      `${answerUrl}75.png`,
      `${answerUrl}76.png`,
    ],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'assets/images/questions/8.png',
    options: [
      `${answerUrl}81.png`,
      `${answerUrl}82.png`,
      `${answerUrl}83.png`,
      `${answerUrl}84.png`,
      `${answerUrl}85.png`,
      `${answerUrl}86.png`,
    ],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 9,
    question: 'assets/images/questions/9.png',
    options: [
      `${answerUrl}91.png`,
      `${answerUrl}92.png`,
      `${answerUrl}93.png`,
      `${answerUrl}94.png`,
      `${answerUrl}95.png`,
      `${answerUrl}96.png`,
    ],
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
