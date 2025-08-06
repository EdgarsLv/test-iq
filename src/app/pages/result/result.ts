import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

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
export class Result implements OnInit {
  public result = input<TResult>();

  private meta = inject(Meta);
  private title = inject(Title);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // Set dynamic meta tags
    this.title.setTitle(`IQ Test Result #${id}`);
    this.meta.updateTag({
      name: 'description',
      content: `Check out my IQ test result!`,
    });
    this.meta.updateTag({
      property: 'og:title',
      content: `IQ Test Result #${id}`,
    });
    this.meta.updateTag({
      property: 'og:description',
      content: `See how I scored on the IQ test.`,
    });
    this.meta.updateTag({
      property: 'og:image',
      content: `https://your-site.com/api/share-image/${id}.png`,
    });
    this.meta.updateTag({
      property: 'og:url',
      content: `https://your-site.com/result/${id}`,
    });
  }
}
