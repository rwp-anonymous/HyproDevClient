

import { Injectable } from '@angular/core';
import { PopUpItem } from './mrn-add.component';

@Injectable({
  providedIn: 'root'
})
export class MrnAddPopupService {
  item:PopUpItem;
  constructor() { }
}
