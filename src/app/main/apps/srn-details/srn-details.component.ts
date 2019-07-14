import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


export interface PoData {
  poNo: string;
  itemName: string;
  unit: string;
  status: string;
}
export interface MrnData {
  mrnNo: string;
  itemName: string;
  unit: string;
  order: number;
  status: string;
}


@Component({
  selector: 'app-srn-details',
  templateUrl: './srn-details.component.html',
  styleUrls: ['./srn-details.component.scss']
})
export class SrnDetailsComponent implements OnInit {

  displayedColumnsMrn: string[] = ['mrnNo','itemName', 'unit', 'order','status'];
  dataSourceMrn: MatTableDataSource<MrnData>;

  dataMRN:MrnData[];
  dataPO:PoData[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('paginatorpo',{read:MatPaginator}) paginatorpo: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  displayedColumnsPo: string[] = ['poNo','itemName', 'unit', 'status'];
  dataSourcePo: MatTableDataSource<PoData>;
  constructor() { 
    this.populateDataToMRN();
    this.populateDataToPo();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSourceMrn.paginator = this.paginator;
    this.dataSourceMrn.sort = this.sort;

    this.dataSourcePo.paginator = this.paginatorpo;
    this.dataSourcePo.sort = this.sort;
  }
  populateDataToMRN():void{

    this.dataMRN = [
      {
        mrnNo: 'MRN-001',
        itemName: 'TNT',
        unit: 'kg',
        order: 12,
        status:'pending'
      },
      {
        mrnNo: 'MRN-002',
        itemName: 'TNT',
        unit: 'kg',
        order: 12,
        status:'done'
      }
    ]
    this.dataSourceMrn = new MatTableDataSource(this.dataMRN);
}
  
populateDataToPo():void{
this.dataPO=[
  {
    poNo: 'PO-001',
    itemName: 'Cement',
    unit: 'kg',
    status: 'dummy'
  },
  {
    poNo: 'PO-002',
    itemName: 'Cement',
    unit: 'kg',
    status: 'dummy'
  },
  {
    poNo: 'PO-003',
    itemName: 'Cement',
    unit: 'kg',
    status: 'dummy'
  },
  {
    poNo: 'PO-0041',
    itemName: 'Cement',
    unit: 'kg',
    status: 'dummy'
  },
  {
    poNo: 'PO-001',
    itemName: 'Cement',
    unit: 'kg',
    status: 'dummy'
  },
]
this.dataSourcePo = new MatTableDataSource(this.dataPO);
}
}


/** Builds and returns a new User. */



