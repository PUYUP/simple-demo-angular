import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state';

import * as todoActions from '../../../../store/actions/todo/todo.actions';
import * as todoSelectors from '../../../../store/selectors/todo/todo.selectors';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todo$: Observable<any>;

  constructor(private store: Store<AppState>) { 
    this.todo$ = this.store.pipe(select(todoSelectors.selectTodos))
  }

  ngOnInit(): void {
    this.store.dispatch(todoActions.loadTodos());
  }

}
