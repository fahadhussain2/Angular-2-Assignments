export class ArticleModel
{
    title:string;
    link:string;
    vote:number;

constructor(title:string , link:string , vote?:number){
    
    this.title=title;
    this.link=link;
    this.vote=vote || 0;

}

UpVote()
{
    this.vote++;
}

DownVote()
{
    this.vote--;
}

 domain() {
      try{
        const url: string = this.link.split('//')[1]; 
        return url.split('/')[0]; 
      }
      catch(err) {
        return null;
      }
    }

}