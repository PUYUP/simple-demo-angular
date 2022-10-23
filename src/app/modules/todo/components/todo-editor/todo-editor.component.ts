import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state';

import * as todoActions from '../../../../store/actions/todo/todo.actions';
import * as todoSelectors from '../../../../store/selectors/todo/todo.selectors';

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.scss']
})
export class TodoEditorComponent implements OnInit {

  public formGroup: any = FormGroup;
  public todo$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public todo: any
  ) { 
    this.todo$ = this.store.pipe(select(todoSelectors.selectAddedTodo));
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]]
    });

    if (this.todo?.id) {
      this.formGroup.patchValue({
        name: this.todo.name,
      })
    }
  }

  onSubmit(): void {
    if (this.todo?.id) {
      // Update
      this.store.dispatch(todoActions.updateTodo({todoId: this.todo?.id, data: this.formGroup.value}));
    } else {
      // Add
      this.store.dispatch(todoActions.addTodo({data: this.formGroup.value}));
    }
  }

}
