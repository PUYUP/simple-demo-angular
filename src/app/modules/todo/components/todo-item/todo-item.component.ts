import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/store/interfaces';
import { AppState } from 'src/app/store/state';

import Swal from 'sweetalert2';
import * as todoActions from '../../../../store/actions/todo/todo.actions';
import { TodoEditorComponent } from '../todo-editor/todo-editor.component';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input('todo') todo: Todo | any;
  
  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onSelected(event: any, todo: any): void {
    this.store.dispatch(todoActions.updateTodo({todoId: todo?.id, data: {isDone: event.checked}}))
  }

  onEdit(todo: any): void {
    const dialog = this.dialog.open(TodoEditorComponent, {
      width: '300px',
      data: todo,
    });
  }

  onDelete(todoId: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(todoActions.deleteTodo({todoId: todoId}));
      }
    })
  }

}
