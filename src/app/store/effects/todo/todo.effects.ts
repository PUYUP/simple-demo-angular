import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo/todo.service';

import * as todoActions from '../../actions/todo/todo.actions';
import { AppState } from '../../state';


@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private store: Store<AppState>,
  ) {}

  // CREATE
  addTodo$ = createEffect(() => 
    this.actions$.pipe(
      ofType(todoActions.addTodo),
      mergeMap((payload) => {
        return this.todoService.addTodo(payload.data).pipe(
          map((response) => {
            return todoActions.addTodoSuccess({
              data: response
            })
          })
        )
      }),
      catchError((error, caught$) => {
        this.store.dispatch(todoActions.addTodoFailure({ error: error }))
        return caught$
      })
    )
  )

  // READ
  loadTodos$ = createEffect(() => 
    this.actions$.pipe(
      ofType(todoActions.loadTodos),
      mergeMap((payload) => {
        return this.todoService.loadTodos().pipe(
          map((response) => {
            return todoActions.loadTodosSuccess({
              data: response
            })
          })
        )
      }),
      catchError((error, caught$) => {
        this.store.dispatch(todoActions.loadTodosFailure({ error: error }))
        return caught$
      })
    )
  )

  // UPDATE
  updateTodo$ = createEffect(() => 
    this.actions$.pipe(
      ofType(todoActions.updateTodo),
      mergeMap((payload) => {
        return this.todoService.updateTodo(payload.todoId, payload.data).pipe(
          map((response) => {
            return todoActions.updateTodoSuccess({
              data: response
            })
          })
        )
      }),
      catchError((error, caught$) => {
        this.store.dispatch(todoActions.updateTodoFailure({ error: error }))
        return caught$
      })
    )
  )

  // DELETE
  deleteTodo$ = createEffect(() => 
    this.actions$.pipe(
      ofType(todoActions.deleteTodo),
      mergeMap((payload) => {
        return this.todoService.deleteTodo(payload.todoId).pipe(
          map((response) => {
            return todoActions.deleteTodoSuccess({
              data: response
            })
          })
        )
      }),
      catchError((error, caught$) => {
        this.store.dispatch(todoActions.deleteTodoFailure({ error: error }))
        return caught$
      })
    )
  )

}
