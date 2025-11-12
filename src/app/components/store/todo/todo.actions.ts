import { createAction, props } from '@ngrx/store';
import { Todo } from '../../../model/todo.model';

const addTodo = createAction('[TODO] Add Todo', props<{ todo: Todo }>());
const renameTodo = createAction(
  '[TODO] Rename Todo',
  props<{ id: string; title: string }>()
);
const removeTodo = createAction('[TODO] Remove Todo', props<{ id: string }>());
const loadTodos = createAction('[TODO] Load Todos');
const toggleTodo = createAction('[TODO] Toggle Todo', props<{ id: string }>());
const loadTodosSuccess = createAction(
  '[TODO] Load Todos Success',
  props<{ todos: Todo[] }>()
);
const loadTodosFailure = createAction(
  '[TODO] Load Todos Failure',
  props<{ error: string }>()
);
const setFilter = createAction(
  '[TODO] Set Filter',
  props<{ filter: 'all' | 'active' | 'completed' }>()
);

export {
  addTodo,
  removeTodo,
  renameTodo,
  toggleTodo,
  loadTodos,
  setFilter,
  loadTodosSuccess,
  loadTodosFailure,
};
