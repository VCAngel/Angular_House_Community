import { Component, Input } from '@angular/core';
import { BlogArticle } from 'src/app/models/blog-article.model';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})
export class BlogArticleComponent {
  @Input() article: BlogArticle = {
    title: '',
    description: '',
    author: '',
    date: undefined
  }
}
