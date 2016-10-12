import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' 
})
export class AppComponent {
  tasks:Array<string>=[];
  task:string;
 
  addtask()
  {
    if(this.task == null )
    {
      alert("please enter a task");
    }
    else
    {
    this.tasks.push(this.task);
    this.task='';
    }
  }
 }
