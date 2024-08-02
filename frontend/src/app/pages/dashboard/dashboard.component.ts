import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService, Todo } from '../../services/api/api.service';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  todos: Todo[] = [];
  token = '';
  title = '';
  desription = '';

  cssClass(status: string) {
    return {
      'list-item-todo': status === 'To Do',
      'list-item-done': status === 'Done'
    }
  }

  constructor(private router: Router, private authService: AuthService, private cookieService: CookieService, private apiService: ApiService) { }
  removeItemById(array: Todo[], id: string): Todo[] {
    return array.filter(item => item._id !== id);
  }

  ngOnInit() {
    this.getToken();
    console.log(this.token);
    this.apiService.getTodoByUser(this.token).subscribe(tasks => {
      this.todos = tasks.tasks;
    });
    console.log(this.todos);
  }

  editItem(id: string, status: string) {
    this.apiService.editTodo(id, status, this.token).subscribe(task => {
      console.log(task)
      this.todos[this.todos.findIndex(task => task._id === id)] = task;
      console.log(this.todos);
    }
    )
  }

  deleteTask(id: string) {
    this.apiService.deleteTodo(id, this.token).subscribe(task => {
      console.log(task)
      //this.todos= this.removeItemById(this.todos, id);
      this.todos.splice(this.todos.findIndex(task => task._id === id), 1);
      console.log(this.todos);
    })
  }

  addTask() {

    this.apiService.addTodo(this.title, this.desription, 'To Do', this.token).subscribe(task => {
      this.todos.push(task);
      console.log(task)
    })
  }

  reloadPage() {
    console.log('Navigating to / and reloading...');
    this.router.navigate(['/']).then(() => {
      console.log('Navigation complete, reloading...');
      window.location.reload();
    });
  }
  
  logout() {
    this.reloadPage();
    this.authService.logout();
  
  }



  getToken(): string | null {
    this.token = this.cookieService.get('auth_token');
    return this.token;
  }




}
