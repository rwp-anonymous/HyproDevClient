import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  jwtHelper:JwtHelperService = new JwtHelperService();
  // Token
  token: string = ''; 
  userSession: Object = {};

  constructor() { }

  // Authentication
  authenticate(credentials: Object, endpoint: string): void {
    
  }

  // Set token 
  setTokenAndSession(token:string,session: Object): void{

    this.token = token;
    this.userSession = session;

    //store call
    this.storeToken();
  }

  // Logout
  logOut(): void{

    this.token = null;
    this.userSession = null;
    localStorage.clear();
  }

  // Local Storage
  storeToken(): void{

    localStorage.setItem('id_token',this.token);
    localStorage.setItem('userSession',JSON.stringify(this.userSession));
  }

  // Get token from localstorage
  getToken(): string{

    this.token = localStorage.getItem('id_token');
    return this.token;

  }

  // Decode token
  decodeToken(): any{
    return this.jwtHelper.decodeToken(this.getToken());
  }

  // Check  islogged in
  isLoggedIn(): boolean{

    if(!this.jwtHelper.isTokenExpired(this.getToken())){
      return true;
    }else{
      return false;
    }
  }

  // Check role type of token
  getRole(): number{
    return this.decodeToken().role;
  }

  // Check whether token is expired or not

  getUserSession(): Object{

    this.userSession = localStorage.getItem('userSession');
    return this.userSession;

  }

}
