import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  toDo = [
    { name: "Program things" },
    { name: "Do things" },
    { name: "Buy coffee" },
    { name: "The Optimistic Reaper" }
  ];

  inProgress = [
    { name: "Do things" }
  ];  
  
  done = [
    { name: "Program a POC" }
  ];

  constructor(private dragulaService: DragulaService) {
    // use these if you want

    this.dragulaService.createGroup("KANBAN", {
      revertOnSpill: true
    });

    this.dragulaService.drag("KANBAN").subscribe(args => {
      console.log(args);
    });

    this.dragulaService.over("KANBAN").subscribe(args => {
      console.log(args);
    });

    this.dragulaService.dropModel("KANBAN").subscribe(args => {
      console.log(args);
    });
  }
}
