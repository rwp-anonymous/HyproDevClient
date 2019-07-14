import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Routes, Router } from '@angular/router';
import { MrnService } from './mrn.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export interface MrnItem {
  id:number;
  mrnNo: string;
  siteLocation: string;
  status: string;
  reqDate: string;
  reqBy: string;
}

export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-mrn',
  templateUrl: './mrn.component.html',
  styleUrls: ['./mrn.component.scss']
})
export class MrnComponent implements OnInit {

  displayedColumns: string[] = ['mrnNo', 'siteLocation', 'status', 'reqDate', 'reqBy', 'details'];
  dataSource: MatTableDataSource<MrnItem>;
  mrnItems: MrnItem[] = [];
  mrnItem: MrnItem;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  foods: Food[] = [
    { value: 'date', viewValue: 'Date' },
    { value: 'status', viewValue: 'Status' },
    { value: 'Mrn-No', viewValue: 'Mrn No' }
  ];

  constructor(
    private router: Router,
    private mrnService: MrnService
  ) {

  }
  
  ngAfterViewInit() {
   
  }

  ngOnInit() {
    this.mrnService.getAllMrns().subscribe((res: any) => {
      if (res.length > 0) {
        console.log(res);
        this.bindMrnsToTable(res);
      }
    }, (err) => { console.log('Internal server error ..!') });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(row: any): void {
    // console.log(row);
    this.mrnService.mrnId = row.id;
    this.router.navigate(['./apps/mrn-details', row.id]);
  }

  navigateToCreateForm() {
    this.router.navigate(['./apps/mrn-create']);
  }

  bindMrnsToTable(data: any): void {
    let items = [];
    data.forEach(element => {

      this.mrnItems.push({
        id:element.id,
        mrnNo: element.mrnNo,
        siteLocation: element.siteLocation,
        status: element.status,
        reqDate: element.requestDate,
        reqBy: ''
      });
    });
    this.dataSource = new MatTableDataSource(this.mrnItems);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
