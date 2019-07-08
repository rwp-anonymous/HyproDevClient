import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { environment } from './../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  headers: HttpHeaders;
  token: string = '';

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {


    // Token set
    this.token = this.authService.getToken();
    //this.token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWU1ZDg0MWM5NzBlMDAxN2U5Nzk0ZCIsInVzZXJuYW1lIjoiY2hhbW9kIiwicm9sZSI6MTAwMCwiaWF0IjoxNTUwNjgxMzI3LCJleHAiOjE1NTEyODYxMjd9.GYydP2Yq0EF-sjlcd-AeXqTqoE6geRb0HsPdWEBc8ZA";
    // Header set
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Authorization', this.token);
  }

  // make a post req
  makePost(endPoint: string, object: any) {

    return this.http.post(environment.serverUrl + endPoint, object, { headers: this.headers });
  }

  // make a post req
  makePostHeaderless(endPoint: string, object: any) {

    return this.http.post(environment.serverUrl + endPoint, object);
  }

  // make get req
  makeGet(endPoint: string) {

    return this.http.get(environment.serverUrl + endPoint, { headers: this.headers });
  }

  // make delete req
  makeDelete(endPoint: string) {

    return this.http.delete(environment.serverUrl + endPoint, { headers: this.headers });
  }

  //make put req
  makePut(endPoint: string) {

    return this.http.put(environment.serverUrl + endPoint, { headers: this.headers });
  }

}
