import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


export interface PoData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
export interface MrnData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];


@Component({
  selector: 'app-srn-details',
  templateUrl: './srn-details.component.html',
  styleUrls: ['./srn-details.component.scss']
})
export class SrnDetailsComponent implements OnInit {

  displayedColumnsMrn: string[] = ['id','name', 'progress', 'color'];
  dataSourceMrn: MatTableDataSource<MrnData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('paginatorpo',{read:MatPaginator}) paginatorpo: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  displayedColumnsPo: string[] = ['id','name', 'progress', 'color'];
  dataSourcePo: MatTableDataSource<PoData>;
  constructor() { 

    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSourceMrn = new MatTableDataSource(users);
    this.dataSourcePo = new MatTableDataSource(users);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSourceMrn.paginator = this.paginator;
    this.dataSourceMrn.sort = this.sort;

    this.dataSourcePo.paginator = this.paginatorpo;
    this.dataSourcePo.sort = this.sort;
  }

  
}


/** Builds and returns a new User. */
function createNewUser(id: number): MrnData  {
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


