import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../../services/todo';
import { FormsModule } from '@angular/forms';
import { TodoStats } from '../../todo-stats/todo-stats/todo-stats';
import { Store } from '@ngrx/store';
import { Todo } from '../../../model/todo.model';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.scss',
})
export class TodoAdd {
  //private readonly todos = inject(TodoService);
  private readonly todoStore = inject(Store);
  newTitle = signal('');

  onEnter() {
    this.add();
  }
  add() {
    //this.todos.add(this.newTitle());
    const t = this.newTitle().trim();
    if (!t) return;
    const todo: Todo = {
      id: crypto.randomUUID(),
      title: t,
      completed: false,
      createdAt: new Date(),
    };
    this.todoStore.dispatch({ type: '[TODO] Add Todo', todo });
  }
}
