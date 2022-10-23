import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActionsSubject } from '@ngrx/store';
import { TodoEditorComponent } from './components/todo-editor/todo-editor.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private actionsSubject$: ActionsSubject,
  ) { }

  ngOnInit(): void {
    this.actionsSubject$.subscribe((state: any) => {
      switch (state.type) {
        case '[Todo] Add Todo Success':
        case '[Todo] Update Todo Success':
          this.dialog.closeAll();
          break;
        default:
          // pass
      }
    })
  }

  onAddNewTodo(): void {
    const dialog = this.dialog.open(TodoEditorComponent, {
      width: '300px',
    });
  }

}
