import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Routes, Router } from '@angular/router';

export interface Sortby {
  value: string;
  viewValue: string;
}

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
  const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

@Component({
  selector: 'app-srn',
  templateUrl: './srn.component.html',
  styleUrls: ['./srn.component.scss']
})
export class SrnComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'progress', 'color','action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  sorts: Sortby[] = [
    {value: 'srnno-0', viewValue: 'Srn No'},
    {value: 'storelocation-1', viewValue: 'Store Location'},
    {value: 'approvedby-2', viewValue: 'Approved By'},
    {value: 'reqby-2', viewValue: 'Requested By'},
    {value: 'issuedate-2', viewValue: 'Issued Date'}
  ];

  constructor(private router:Router) { 

    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(row:any):void{
    console.log(row);
    this.router.navigate(['./apps/srn-details',row.id]);
  }

  getDocumentGen(){
    
    this.router.navigate(['./apps/srn-document-generator']);
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
