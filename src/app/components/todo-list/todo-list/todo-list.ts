import { Component, inject } from '@angular/core';
import { Stats } from '../../store/todo/todo.state';
import { TodoStats } from '../../todo-stats/todo-stats/todo-stats';
import { TodoFilter } from '../../todo-filter/todo-filter/todo-filter';
import { Store } from '@ngrx/store';
import { AsyncPipe, CommonModule, NgIf, NgFor } from '@angular/common';

import {
  selectFilteredTodos,
  selectStats,
} from '../../store/todo/todo.selector';
import {
  removeTodo,
  renameTodo,
  toggleTodo,
} from '../../store/todo/todo.actions';
import { Observable } from 'rxjs';
import { Todo } from '../../../model/todo.model';

@Component({
  selector: 'app-todo-list',
  imports: [TodoStats, TodoFilter, AsyncPipe, CommonModule, NgIf, NgFor],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  //private readonly todos = inject(TodoService);
  private readonly todoStore = inject(Store);
  /* readonly list = this.todos.filteredTodos;
  readonly stats = this.todos.stats; */
  readonly list$: Observable<Todo[]> =
    this.todoStore.select(selectFilteredTodos);

  stats$: Observable<Stats> = this.todoStore.select(selectStats);

  toggle(id: string) {
    //this.todos.toggle(id);
    this.todoStore.dispatch(toggleTodo({ id }));
  }

  rename(id: string, title: string) {
    //this.todos.rename(id, title);
    this.todoStore.dispatch(renameTodo({ id, title }));
  }

  remove(id: string) {
    //this.todos.remove(id);
    this.todoStore.dispatch(removeTodo({ id }));
  }
}
