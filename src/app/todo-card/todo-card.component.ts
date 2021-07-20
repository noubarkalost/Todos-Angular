import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})

export class TodoCardComponent implements OnInit {

  constructor() {
  }

  todoStatus: string = "is-danger"
  check: string = "Pending"
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() description: string = '';
  @Input() dueDate: string = '';

  ngOnInit(): void {
  }

  isDone(e: Event) {
    const clicked = (e.target as HTMLElement)
    if (clicked && this.check === "Pending") {
      this.check = "Done"
      this.todoStatus = "is-success"
    } else {
      this.check = "Pending"
      this.todoStatus = "is-danger"


    }
  }


}
