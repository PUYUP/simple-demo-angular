import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoFeatureKey } from '../../reducers/todo/todo.reducer';
import { AppState } from '../../state';

export const todoFeatureSelector = createFeatureSelector<AppState>(todoFeatureKey);

export const selectTodos = createSelector(
	todoFeatureSelector,
	(state: any) => {
		return state.list
	}
)

export const selectAddedTodo = createSelector(
	todoFeatureSelector,
	(state: any) => {
		return state.add
	}
)