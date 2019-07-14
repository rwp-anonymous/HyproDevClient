import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Http } from '@angular/http';
import { HttpDataService } from 'app/main/helpers/http-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MrnDetailsService {

  constructor(
    private dataService:HttpDataService
  ) { }


  getMrnItems(id:number):Observable<any>{
    return this.dataService.makeGet('mrns/'+id);
  }


}
