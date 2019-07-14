import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MrnItemAddPopupService } from './mrn-item-add-popup.service';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';

export interface PopUpItem {

  popupItemName: string;
  popupQty: number;
  popupRemarks: string;

}

interface Item {
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  form: FormGroup;
  popupItem: PopUpItem;
  items: Item[];

  constructor(
    private _formBuilder: FormBuilder,
    private _popUpService:MrnItemAddPopupService,
    private dialogRef:MatDialogRef<PopupComponent>,
    ) { }

  ngOnInit() {


    this.form = this._formBuilder.group({

      popupItemName: ['', Validators.required],
      popupQty: ['', [Validators.required,Validators.pattern('^[0-9]$')]],
      popupRemarks: ['', [Validators.required,Validators.maxLength(100)]]

    });



    // get items from master table to dropdown
    this.items = [
      {value:'0291',viewValue:'ItmNo - 0291 Name - dynamites'},
      {value:'0292',viewValue:'ItmNo - 0292 Name - hotwires'},
      {value:'0293',viewValue:'ItmNo - 0293 Name - tubes'},
      {value:'0294',viewValue:'ItmNo - 0294 Name - water barrels'},
      {value:'0295',viewValue:'ItmNo - 0295 Name - turbine coolants'},
      {value:'0296',viewValue:'ItmNo - 0296 Name - grease'},
    ];

  }
  ngOnDestroy(): void {
    console.log('destroyed ...');
  }

  onAddItem(): void {
    if (this.form.valid) {

      this._popUpService.item = this.form.value;
      this.closeDialog();
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }


}
