import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';

type TResult = {
  date: string;
  score: number;
  timeSpent: number;
};

@Component({
  selector: 'app-result',
  imports: [CommonModule, ButtonModule],
  templateUrl: './result.html',
  styleUrl: './result.scss',
})
export class Result implements OnInit {
  public result = input<TResult>();
  public image = input<string>('');

  private meta = inject(Meta);
  private title = inject(Title);
  private route = inject(ActivatedRoute);

  public timeSpent = computed(() => Math.ceil(this.result()!.timeSpent / 60));

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // Set dynamic meta tags
    this.title.setTitle('IQ Test Result');
    this.meta.updateTag({
      name: 'description',
      content: `Check out my IQ test result!`,
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'IQ Test Result',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: `I scored ${this.result()!.score} on the IQ test.`,
    });
    this.meta.updateTag({
      property: 'og:image',
      content: this.image(),
    });
    this.meta.updateTag({
      property: 'og:url',
      content: `https://test.pucens.com/result/${id}`,
    });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: 'IQ Test Result' });
    this.meta.updateTag({
      name: 'twitter:description',
      content: `I scored ${this.result()!.score} on the IQ test.`,
    });
    this.meta.updateTag({ name: 'twitter:image', content: this.image() });
  }

  share() {
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          url: shareUrl,
        })
        .catch((err) => console.error('Sharing failed', err));
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Link copied to clipboard!');
      });
    }
  }
}
