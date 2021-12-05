import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-new-todo',
  templateUrl: './cs-new-todo.component.html',
  styleUrls: ['./cs-new-todo.component.scss']
})
export class CsNewTodoComponent implements OnInit {

  todo = ''

  items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  newTodo() {
    if (!this.todo) {
      alert('Preencha o campo!');

      return;
    }

    this.items.push(this.todo);

    this.todo = '';
  }

}
