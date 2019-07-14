import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { PopupComponent } from './popup/popup.component';
import { MrnItemAddPopupService } from './popup/mrn-item-add-popup.service';



export interface Item {
  itemNo: string;
  itemName: string;
  unit: string;
  qty: number;
  remarks: string;
}
export interface SiteLocation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mrn-create',
  templateUrl: './mrn-create.component.html',
  styleUrls: ['./mrn-create.component.scss']
})
export class MrnCreateComponent implements OnInit {


  displayedColumns: string[] = ['Item No', 'Item Name', 'Unit', 'Qty', 'Remarks'];
  dataSource: MatTableDataSource<Item>;
  data: Item[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  locations: SiteLocation[] = [
    { value: 'site1', viewValue: 'Uganda' },
    { value: 'site2', viewValue: 'Sri Lanka' },
    { value: 'site3', viewValue: 'Baharein' }
  ];


  form: FormGroup;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _popUpService: MrnItemAddPopupService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    this.form = this._formBuilder.group({
      mrnNo: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.maxLength(5)]],
      country: ['', Validators.required]
    });

    this.dataSource = new MatTableDataSource(this.data);
    this._popUpService.item = null;



  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(PopupComponent);

    this.dialog.afterAllClosed.subscribe(() => {
      if(this._popUpService.item != undefined){
        //{ itemNo: '001', itemName: 'Dynamites', qty: 100, remarks: 'no rush', unit: 'kg' },
        let popupItem = this._popUpService.item;
        let itemBreak = popupItem.popupItemName.split(',');
        let isDuplicate = false;

        for (let i = 0; i < this.data.length; i++) {
          if(this.data[i].itemNo == itemBreak[0]){
            isDuplicate = true;
            break;
          }
          
        }

        if(!isDuplicate){
          this.data.push({
            itemNo:itemBreak[0],
            itemName: itemBreak[1],
            qty: popupItem.popupQty,
            remarks:popupItem.popupRemarks,
            unit:itemBreak[2]
          });
  
          this.dataSource.data = this.data;
        }

      }
    });

  }



}
