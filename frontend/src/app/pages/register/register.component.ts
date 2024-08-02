import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MatProgressSpinnerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isLoading = false;

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) { }

  register() {
    this.isLoading = true;
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value.name!, this.registerForm.value.email!, this.registerForm.value.password!).subscribe((user) => {
        this.isLoading = false;
        alert(user.email + ' has been registered');

      }, (error) => {
        console.error('Registration failed', error);
        this.isLoading = false;
      });
    }

    

  }

 

}
