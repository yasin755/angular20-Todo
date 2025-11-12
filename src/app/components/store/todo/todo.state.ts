import { Todo } from '../../../model/todo.model';
export type Filters = 'all' | 'active' | 'completed';

export interface TodoState {
  todos: Todo[];
  filter: Filters;
  loading: boolean;
  error: string | null;
}

export interface Stats {
  total: number;
  completed: number;
  active: number;
}

export const initialTodoState: TodoState = {
  todos: [],
  filter: 'all',
  loading: false,
  error: null,
};
