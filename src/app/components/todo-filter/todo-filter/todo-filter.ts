import { Component, inject } from '@angular/core';
import { TodoService } from '../../../services/todo';
import { Store } from '@ngrx/store';
import { selectFilter } from '../../store/todo/todo.selector';
import { Observable } from 'rxjs';
import { Filters } from '../../store/todo/todo.state';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-filter',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './todo-filter.html',
  styleUrl: './todo-filter.scss',
})
export class TodoFilter {
  //private readonly todos = inject(TodoService);
  private readonly todos = inject(Store);
  //readonly filter = this.todos.filter;
  readonly filter$: Observable<Filters> = this.todos.select(selectFilter);

  onSetFilter(filter: Filters) {
    this.todos.dispatch({ type: '[TODO] Set Filter', filter });
  }
}
