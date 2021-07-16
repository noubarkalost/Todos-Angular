import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})

export class TodoCardComponent implements OnInit {

  constructor() { }
  todoStatus:string = "is-danger"
  check: string = "Pending"
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() description = '';
  @Input() dueDate = '';

  ngOnInit(): void {
  }
  isDone(e:any){
    const clicked = e.target
    if(clicked && this.check === "Pending"){
      this.check = "Done"
      this.todoStatus = "is-success"
      console.log(e.target)
    }
    else{
      this.check = "Pending"
      this.todoStatus = "is-danger"


    }
  }


}
