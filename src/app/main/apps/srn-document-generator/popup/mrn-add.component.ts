import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MrnAddPopupService } from './mrn-add-popup.service';


export interface PopUpItem {

  popupItemName: string;
  //popupQty: number;
  popupRemarks: string;

}

interface Mrn {
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-mrn-add',
  templateUrl: './mrn-add.component.html',
  styleUrls: ['./mrn-add.component.scss']
})
export class MrnAddComponent implements OnInit {

  form: FormGroup;
  popupItem: PopUpItem;
  mrns: Mrn[];

  constructor(
    private _formBuilder: FormBuilder,
    private _popUpService:MrnAddPopupService,
    private dialogRef:MatDialogRef<MrnAddComponent>
  ) { }

  ngOnInit() {

    this.form = this._formBuilder.group({

      popupItemName: ['', Validators.required],
     //popupQty: ['', [Validators.required,Validators.pattern('^[0-9]$')]],
      popupRemarks: ['', [Validators.required,Validators.maxLength(100)]]

    });


    this.mrns = [
      {value:'0291',viewValue:'MrnNo - 0291 Name - dynamites'},
      {value:'0292',viewValue:'MrnNo - 0292 Name - hotwires'},
      {value:'0293',viewValue:'MrnNo - 0293 Name - tubes'},
      {value:'0294',viewValue:'MrnNo - 0294 Name - water barrels'},
      {value:'0295',viewValue:'MrnNo - 0295 Name - turbine coolants'},
      {value:'0296',viewValue:'MrnNo - 0296 Name - grease'},
    ];
  }

  AddMrn():void{
if(this.form.valid){

  this._popUpService.item = this.form.value;
  this.closeDialog();
}
    
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
