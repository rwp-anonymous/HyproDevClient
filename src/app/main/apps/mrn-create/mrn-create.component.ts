import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


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


    displayedColumns: string[] = ['Item No', 'Item Name', 'Unit','Qty', 'Remarks'];
    dataSource: MatTableDataSource<Item>;
    data:Item[] = [
        {itemNo:'001',itemName:'Dynamites',qty:100,remarks:'no rush',unit:'kg'},
        {itemNo:'001',itemName:'Dynamites',qty:100,remarks:'no rush',unit:'kg'},
        {itemNo:'001',itemName:'Dynamites',qty:100,remarks:'no rush',unit:'kg'},
        {itemNo:'001',itemName:'Dynamites',qty:100,remarks:'no rush',unit:'kg'},
        {itemNo:'001',itemName:'Dynamites',qty:100,remarks:'no rush',unit:'kg'},
        {itemNo:'001',itemName:'Dynamites',qty:100,remarks:'no rush',unit:'kg'},

    ];
  
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
      private _formBuilder: FormBuilder
  )
  {
      this._unsubscribeAll = new Subject();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void
  {
  
      this.form = this._formBuilder.group({
          mrnNo : ['', Validators.required],
          lastName  : ['', Validators.required],
          address   : ['', Validators.required],
          address2  : ['', Validators.required],
          city      : ['', Validators.required],
          state     : ['', Validators.required],
          postalCode: ['', [Validators.required, Validators.maxLength(5)]],
          country   : ['', Validators.required]
      });

      this.dataSource = new MatTableDataSource(this.data);

  }

  ngOnDestroy(): void
  {
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
