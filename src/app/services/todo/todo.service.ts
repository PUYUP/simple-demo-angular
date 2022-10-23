import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/store/interfaces';

const ENDPOINT = 'https://63534e24a9f3f34c37508d3f.mockapi.io/api/v1/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  public addTodo(payload: Todo): Observable<any> {
    return this.httpClient.post(ENDPOINT, payload)
  }

  public updateTodo(todoId: string, payload: Todo): Observable<any> {
    return this.httpClient.put(`${ENDPOINT}/${todoId}`, payload)
  }

  public deleteTodo(todoId: string): Observable<any> {
    return this.httpClient.delete(`${ENDPOINT}/${todoId}`)
  }

  public loadTodos(): Observable<any> {
    return this.httpClient.get(ENDPOINT)
  }

}
