import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MrnService } from '../mrn/mrn.service';
import { MrnDetailsService } from './mrn-details.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface IncludedMaterial {
  code: string;
  description: string;
  unit: string;
  qty: number;
  //remarks: string;
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

  displayedColumnsIncMaterial: string[] = ['code', 'description', 'unit', 'qty']; //'remarks'];
  dataSourceIncMat: MatTableDataSource<IncludedMaterial>;

  displayedColumnsSRN: string[] = ['srnNo', 'itemName', 'unit', 'order', 'status'];
  dataSourceSRN: MatTableDataSource<SRN>;

  data: IncludedMaterial[] =  [];
  dataSRN: SRN[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('paginatorSRN', { read: MatPaginator }) paginatorSRN: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private mrnService: MrnService,
    private mrnDetailService: MrnDetailsService
  ) { 
    this.populateDataToSRN();
  }

  ngOnInit() {
    
    console.log(this.mrnService.mrnId);
    this.mrnDetailService.getMrnItems(this.mrnService.mrnId).subscribe((res)=>{
      if(res){
        console.log(res);
        this.populateData(res);
      }
    },err=>console.log('Internal server error ..!'));
  }

  ngAfterViewInit() {

    this.dataSourceSRN.paginator = this.paginatorSRN;
    this.dataSourceSRN.sort = this.sort;

  }

  populateData(res:any): void {

    this.data = [];
    res.items.forEach(element => {
      this.data.push({
        code:element.code ,
        description: element.description,
        unit: element.unit,
        qty: element.quantity
      });
    });
    this.dataSourceIncMat = new MatTableDataSource(this.data);

    this.dataSourceIncMat.paginator = this.paginator;
    this.dataSourceIncMat.sort = this.sort;
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
