import { Component, OnInit } from '@angular/core';
import { ArticleModel} from '../user-item/Article.Model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  articles: ArticleModel[];
  

  constructor() {

    this.articles=[
      new ArticleModel("Angular 2" , "http://www.angular.io" , 10),
      new ArticleModel("Google" , "http://www.google.com" , 3),
      new ArticleModel("Facebook" , "htp://www.facebook.com", 5),
    ];
  }

  AddArticle(title,link):boolean
  {
    console.log("title" + title.value + "link" + link.value);
    this.articles.push(new ArticleModel(title.value , link.value));
    title.value='';
    link.value='';
    return false;

  }

sortArticles(): ArticleModel[]{
  return this.articles.sort((a:ArticleModel , b:ArticleModel) => b.vote - a.vote)
}
  

  ngOnInit() {
  }

}
