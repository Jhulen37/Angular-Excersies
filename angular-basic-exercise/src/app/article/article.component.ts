import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  title: string = 'whatever you want';
  content: string = 'stuff';
  isTechRelated: boolean = true;
  techRelatedMockText: string = 'techRelated';
  getColor() {
    return this.isTechRelated === true ? 'blue' : 'yellow';
  }
  toggleIsTechRelated() {
    this.isTechRelated === true
      ? (this.isTechRelated = false)
      : (this.isTechRelated = true);
  }
}
