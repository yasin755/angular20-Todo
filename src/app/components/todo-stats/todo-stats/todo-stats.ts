import { Component, inject } from '@angular/core';
import { TodoService } from '../../../services/todo';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Stats } from '../../store/todo/todo.state';
import { selectStats } from '../../store/todo/todo.selector';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-stats',
  imports: [AsyncPipe, NgIf],
  templateUrl: './todo-stats.html',
  styleUrl: './todo-stats.scss',
})
export class TodoStats {
  //private readonly todos = inject(TodoService);
  private readonly todos = inject(Store);
  readonly stats$: Observable<Stats> = this.todos.select(selectStats);
}
