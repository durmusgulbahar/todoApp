import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { CookieOptions, CookieService } from 'ngx-cookie-service';

interface User{
    name: string;
    email: string;
    password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://todo-api.durmusgulbahar.dev/api/v1/auth';
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();   
  
  constructor(private http: HttpClient, private cookieService:CookieService ){}
  


  register(name:string, email: string, password: string): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/register', { name, email, password }).pipe(catchError((error) => { throw error }));
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/login', { email, password }).pipe(catchError((error) => { throw error }));
  }

  logout(): void {
    console.log('Logging out...');
    this.cookieService.delete('auth_token');
    
  }

  setToken(token: string) {
   
    interface CustomCookieOptions extends CookieOptions {
      httpOnly: boolean;
    }
    
    const options: CustomCookieOptions = {
      path: '/',
      secure: true,
      httpOnly: true,
      expires: 365
    };
    
    this.cookieService.set('auth_token', token, options);
  }

  getToken(): string | null {
    return this.cookieService.get('auth_token');
  }
  


}
