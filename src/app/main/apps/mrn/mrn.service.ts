import { Injectable } from '@angular/core';
import { HttpDataService } from 'app/main/helpers/http-data.service';

@Injectable({
  providedIn: 'root'
})
export class MrnService {

  mrnId: any;

  constructor(
    private dataService:HttpDataService
  ) { }

  getAllMrns(){
    return this.dataService.makeGet('mrns');
  }
}
