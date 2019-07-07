import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MrnService } from '../mrn/mrn.service';
import { MrnDetailsService } from './mrn-details.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface IncludedMaterial {
  itemNo: string;
  itemName: string;
  unit: string;
  qty: number;
  remarks: string;
}

export interface SRN {
  srnNo: string;
  itemName: string;
  unit: string;
  order: number;
  status: string;
}


@Component({
  selector: 'app-mrn-details',
  templateUrl: './mrn-details.component.html',
  styleUrls: ['./mrn-details.component.scss']
})
export class MrnDetailsComponent implements OnInit {

  displayedColumnsIncMaterial: string[] = ['itemNo', 'itemName', 'unit', 'qty', 'remarks'];
  dataSourceIncMat: MatTableDataSource<IncludedMaterial>;

  displayedColumnsSRN: string[] = ['srnNo', 'itemName', 'unit', 'order', 'status'];
  dataSourceSRN: MatTableDataSource<SRN>;

  data: IncludedMaterial[];
  dataSRN: SRN[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('paginatorSRN', { read: MatPaginator }) paginatorSRN: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private mrnService: MrnService,
    private mrnDetailService: MrnDetailsService
  ) { 
    this.populateData();
    this.populateDataToSRN();
  }

  ngOnInit() {
    
    console.log(this.mrnService.mrnId);
    // this.mrnDetailService.getMrn().subscribe((res)=>{

    // });
  }

  ngAfterViewInit() {

    this.dataSourceIncMat.paginator = this.paginator;
    this.dataSourceIncMat.sort = this.sort;

    this.dataSourceSRN.paginator = this.paginatorSRN;
    this.dataSourceSRN.sort = this.sort;

  }

  populateData(): void {

    this.data = [
      {
        itemNo: 'DT-001',
        itemName: 'TNT',
        unit: 'kg',
        qty: 12,
        remarks: 'nothing so far'
      },
      {
        itemNo: 'DT-002',
        itemName: 'TNT',
        unit: 'kg',
        qty: 12,
        remarks: 'nothing so far'
      },
      {
        itemNo: 'DT-003',
        itemName: 'TNT',
        unit: 'kg',
        qty: 12,
        remarks: 'nothing so far'
      },
      {
        itemNo: 'DT-004',
        itemName: 'TNT',
        unit: 'kg',
        qty: 12,
        remarks: 'nothing so far'
      },
      {
        itemNo: 'DT-005',
        itemName: 'TNT',
        unit: 'kg',
        qty: 12,
        remarks: 'nothing so far'
      },{
        itemNo: 'DT-005',
        itemName: 'TNT',
        unit: 'kg',
        qty: 12,
        remarks: 'nothing so far'
      },{
        itemNo: 'DT-005',
        itemName: 'TNT',
        unit: 'kg',
        qty: 12,
        remarks: 'nothing so far'
      }
    ]
    this.dataSourceIncMat = new MatTableDataSource(this.data);
  }

  populateDataToSRN():void{

      this.dataSRN = [
        {
          srnNo: 'DT-001',
          itemName: 'TNT',
          unit: 'kg',
          order: 12,
          status:'pending'
        },
        {
          srnNo: 'DT-002',
          itemName: 'TNT',
          unit: 'kg',
          order: 12,
          status:'done'
        }
      ]
      this.dataSourceSRN = new MatTableDataSource(this.dataSRN);
  }


}
