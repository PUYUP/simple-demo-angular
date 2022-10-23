import { createAction, props } from '@ngrx/store';

// CREATE
export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ data: any }>()
);

export const addTodoSuccess = createAction(
  '[Todo] Add Todo Success',
  props<{ data: any }>()
);

export const addTodoFailure = createAction(
  '[Todo] Add Todo Failure',
  props<{ error: any }>()
);


// READ
export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ data: any }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: any }>()
);


// UPDATE
export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todoId: string, data: any }>()
);

export const updateTodoSuccess = createAction(
  '[Todo] Update Todo Success',
  props<{ data: any }>()
);

export const updateTodoFailure = createAction(
  '[Todo] Update Todo Failure',
  props<{ error: any }>()
);


// DELETE
export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ todoId: string }>()
);

export const deleteTodoSuccess = createAction(
  '[Todo] Delete Todo Success',
  props<{ data: any }>()
);

export const deleteTodoFailure = createAction(
  '[Todo] Delete Todo Failure',
  props<{ error: any }>()
);