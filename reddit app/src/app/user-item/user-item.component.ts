import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel} from './Article.Model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

@Input() article: ArticleModel;




  
  constructor() {
    
 

   }

upVote():boolean
{
  this.article.UpVote();
  return false;
}

downVote():boolean
{
  this.article.DownVote();
  return false;
}
 


  ngOnInit() {
  }

}
