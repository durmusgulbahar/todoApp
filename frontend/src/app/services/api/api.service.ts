
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  _id: string;
  title: string;
  userId: string;
  description: string;
  status: string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4001/api/v1/tasks';
  constructor(private http: HttpClient) { }

  // Check if the user is logged in
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);

  }

  getTodoByUser(token: string) : Observable<any>{
    return this.http.get<any>(this.baseUrl + '/getTasks', { headers: { Authorization: `Bearer ${token}` } });
  }

  addTodo(title: string, description: string,status:string, token: string): Observable<any> {
    return this.http.post<any>(this.baseUrl, { title, description,status }, { headers: { Authorization: `Bearer ${token}` } });
  }


  deleteTodo(id: string, token: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  }

  editTodo(id: string,status:string, token: string): Observable<any> {
    if(status === 'To Do'){
      status = 'Done'
    }else if(status === 'Done'){
      status = 'To Do'
    }

    return this.http.put<any>(this.baseUrl + `/${id}`, {status}, { headers: { Authorization: `Bearer ${token}` } });
  }

}
