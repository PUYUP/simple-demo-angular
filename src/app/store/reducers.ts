import { ActionReducerMap } from "@ngrx/store";

import { AppState } from "./state";
import { TodoReducer } from "./reducers/todo/todo.reducer";

export const AppReducers: ActionReducerMap<AppState> = {
	todo: TodoReducer,
}