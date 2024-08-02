import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MatProgressSpinnerModule, DashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  token='';
  isLoading = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService,private router:Router) { }

  
    handleSubmit() {
      this.isLoading = true;
      if(this.loginForm.valid){
        this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe((user) => {
          console.log('Login successful', user);
          this.token=user.token;
          this.authService.setToken(this.token);
          this.router.navigate(['/dashboard']);
          this.isLoading=false;

          
        }
        , (error) => {
          console.error('Login failed', error);
          this.isLoading=false;
        });
      }

  }
  
  
}
