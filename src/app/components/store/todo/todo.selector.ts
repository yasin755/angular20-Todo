import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from './todo.state';

// Feature selector
const selectTodoState = createFeatureSelector<TodoState>('todos');

// Simple selectors
export const selectTodos = createSelector(selectTodoState, (s) => s.todos);
export const selectFilter = createSelector(selectTodoState, (s) => s.filter);

// Filtered Todos
export const selectFilteredTodos = createSelector(
  selectTodos,
  selectFilter,
  (todos, filter) => {
    if (filter === 'active') return todos.filter((t) => !t.completed);
    if (filter === 'completed') return todos.filter((t) => t.completed);
    return todos;
  }
);

// Stats as in your service
export const selectStats = createSelector(selectTodos, (todos) => {
  const completed = todos.filter((t) => t.completed).length;
  return {
    total: todos.length,
    completed,
    active: todos.length - completed,
  };
});
