import { Action, createReducer, on } from '@ngrx/store';
import * as todoActions from '../../actions/todo/todo.actions';
import * as statuses from '../../statuses';
import { Todo } from '../../interfaces';

export const todoFeatureKey = 'todo';

export interface TodoState {
  add: {
    data: Todo,
    status: string,
    error: any,
  },

  list: {
    data: Todo[],
    status: string,
    error: any,
  }
}

export const initialState: TodoState = {
  add: {
    data: {
      name: '',
      isDone: false,
    },
    status: statuses.IDLE,
    error: null,
  },

  list: {
    data: [],
    status: statuses.IDLE,
    error: null,
  }
};

export const reducer = createReducer(
  initialState,

  // CREATE
  on(todoActions.addTodo, (state, payload) => {
    return {
      ...state,
      add: {
        ...state.add,
        status: statuses.LOADING
      }
    }
  }),
  on(todoActions.addTodoSuccess, (state, payload) => {
    return {
      ...state,
      add: {
        ...state.add,
        data: payload.data,
        status: statuses.IDLE
      },
      list: {
        ...state.list,
        data: [
          ...state.list.data,
          payload.data,
        ]
      }
    }
  }),

  // LOAD
  on(todoActions.loadTodos, (state, payload) => {
    return {
      ...state,
      list: {
        ...state.list,
        status: statuses.LOADING
      }
    }
  }),
  on(todoActions.loadTodosSuccess, (state, payload) => {
    return {
      ...state,
      list: {
        ...state.list,
        data: payload.data,
        status: statuses.IDLE,
      }
    }
  }),

  // UPDATE
  on(todoActions.updateTodo, (state, payload) => {
    return {
      ...state,
      add: {
        ...state.add,
        status: statuses.LOADING
      }
    }
  }),
  on(todoActions.updateTodoSuccess, (state, payload) => {
    const index = state.list.data?.findIndex((d: any) => d.id == payload.data.id);

    return {
      ...state,
      list: {
        ...state.list,
        data: [
          ...state.list.data?.slice(0, index),
          {
            ...state.list.data[index],
            ...payload.data,
          },
          ...state.list.data?.slice(index + 1),
        ]
      },
      add: {
        ...state.add,
        status: statuses.IDLE,
      }
    }
  }),

  // DELETE
  on(todoActions.deleteTodo, (state, payload) => {
    const list = state.list.data?.filter((d: any) => d.id != payload.todoId);

    return {
      ...state,
      list: {
        ...state.list,
        data: list
      }
    }
  }),
);

export function TodoReducer(state: TodoState | undefined, action: Action) {
  return reducer(state, action)
}
