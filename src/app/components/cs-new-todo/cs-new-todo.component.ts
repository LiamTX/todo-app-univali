import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-cs-new-todo',
  templateUrl: './cs-new-todo.component.html',
  styleUrls: ['./cs-new-todo.component.scss']
})
export class CsNewTodoComponent implements OnInit {

  todo = ''

  items: any[] = [];

  loading = false;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.listTodos();
  }

  listTodos() {
    this.loading = true;

    this.todoService.list().subscribe((resp: any) => {
      this.items.push(...resp);
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    })
  }

  newTodo() {
    if (!this.todo) {
      alert('Preencha o campo!');

      return;
    }

    this.todoService.create({ description: this.todo }).subscribe(resp => {
      console.log(resp);
      this.items.push(resp);
      this.todo = '';
    }, err => {
      console.log(err);
    });
  }

  updateTodo(item: any) {
    this.todoService.update(item._id, { done: item.done ? false : true }).subscribe(resp => {
      console.log(resp);
      const todo = this.items.find(t => t._id == item._id);
      const index = this.items.indexOf(todo);
      this.items[index] = resp;
    }, err => {
      console.log(err);
    })
  }

  deleteTodo(id: string) {
    this.todoService.delete(id).subscribe(resp => {
      this.items.splice(this.items.indexOf(this.items.find(todo => todo._id == id)), 1);
    }, err => {
      console.log(err);
    })
  }

}
