import { createReducer, on } from '@ngrx/store';
import { initialTodoState } from './todo.state';
import {
  addTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeTodo,
  renameTodo,
  setFilter,
  toggleTodo,
} from './todo.actions';
import { Todo } from '../../../model/todo.model';

export const todoReducer = createReducer(
  initialTodoState,
  on(addTodo, (state, { todo: todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  on(toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ),
  })),
  on(renameTodo, (state, { id, title }) => ({
    ...state,
    todos: state.todos.map((t) => (t.id === id ? { ...t, title } : t)),
  })),
  on(loadTodos, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
    loading: false,
    error: null,
  })),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error || 'Unknown error',
  })),
  on(setFilter, (state, { filter }) => ({
    ...state,
    filter: filter,
  }))
);
