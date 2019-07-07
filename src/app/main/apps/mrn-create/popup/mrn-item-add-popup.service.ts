import { Injectable } from '@angular/core';
import { PopUpItem } from './popup.component';

@Injectable({
  providedIn: 'root'
})
export class MrnItemAddPopupService {

  item:PopUpItem;
  constructor() { }
}
