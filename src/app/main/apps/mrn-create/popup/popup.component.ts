import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MrnItemAddPopupService } from './mrn-item-add-popup.service';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { HttpDataService } from 'app/main/helpers/http-data.service';

export interface PopUpItem {

  popupItemName: string;
  popupQty: number;
  popupRemarks: string;

}

interface Item {
  value: string;
  viewValue: string;
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
    private _dataService: HttpDataService,
    private _formBuilder: FormBuilder,
    private _popUpService: MrnItemAddPopupService,
    private dialogRef: MatDialogRef<PopupComponent>,
  ) { }

  ngOnInit() {


    this.form = this._formBuilder.group({

      popupItemName: ['', Validators.required],
      popupQty: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      popupRemarks: ['', [Validators.required, Validators.maxLength(100)]]

    });

    // load items from master item table
    this._dataService.makeGet('items').subscribe((res:any) => {
      if (res) {
        
        res.forEach(el => {
          this.items.push({value: el.id,viewValue:'Code: '+el.code+' Name: '+el.description+ 'Unit: '+ el.unit});
        });
      }
    });



    // get items from master table to dropdown
    this.items = [
      { value: '0291', viewValue: 'ItmNo - 0291 Name - dynamites' },
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

  closeDialog() {
    this.dialogRef.close();
  }


}
