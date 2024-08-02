import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ApiService, Todo } from './services/api/api.service';
import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet,LoginComponent, RegisterComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  constructor(private apiService: ApiService, private authService:AuthService) {}
  
  
}
