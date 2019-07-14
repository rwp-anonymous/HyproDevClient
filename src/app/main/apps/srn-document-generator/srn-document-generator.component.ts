import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort,MatDialog } from '@angular/material';
import { MrnAddComponent } from './popup/mrn-add.component';
import { MrnAddPopupService } from './popup/mrn-add-popup.service';

export interface SiteLocation {
  value: string;
  viewValue: string;
}

export interface MrnData {
  mrnNo: string;
  itemName: string;
  unit: string;
  orderQty: number;
  remarks: string;
}

@Component({
  selector: 'app-srn-document-generator',
  templateUrl: './srn-document-generator.component.html',
  styleUrls: ['./srn-document-generator.component.scss']
})
export class SrnDocumentGeneratorComponent implements OnInit {

  displayedColumnsMrn: string[] = ['mrnNo','itemName', 'unit', 'orderQty','remarks'];
  dataSourceMrn: MatTableDataSource<MrnData>;
  data:MrnData[] = [
    {mrnNo:'001',itemName:'Dynamites',orderQty:100,remarks:'no rush',unit:'kg'},
    {mrnNo:'001',itemName:'Dynamites',orderQty:100,remarks:'no rush',unit:'kg'},
    {mrnNo:'001',itemName:'Dynamites',orderQty:100,remarks:'no rush',unit:'kg'},
    {mrnNo:'001',itemName:'Dynamites',orderQty:100,remarks:'no rush',unit:'kg'},
    {mrnNo:'001',itemName:'Dynamites',orderQty:100,remarks:'no rush',unit:'kg'},
    {mrnNo:'001',itemName:'Dynamites',orderQty:100,remarks:'no rush',unit:'kg'},

];

@ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
 


  sitelocations: SiteLocation[] = [
    {value: 'Kampala-0', viewValue: 'Kampala'},
    {value: 'Jinja-1', viewValue: 'Jinja'},
    {value: 'Gulu-2', viewValue: 'Gulu'},
    {value: 'Lira-3', viewValue: 'Lira'},
    {value: 'Arua-4', viewValue: 'Arua'}
  ];

  constructor(
    public dialog: MatDialog,
    private _popUpService: MrnAddPopupService
  ) { }

  ngAfterViewInit() {
    this.dataSourceMrn.paginator = this.paginator;
    this.dataSourceMrn.sort = this.sort;
  }
  ngOnInit() {
    this.dataSourceMrn = new MatTableDataSource(this.data);
  }

  applyFilter(filterValue: string) {
    this.dataSourceMrn.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceMrn.paginator) {
      this.dataSourceMrn.paginator.firstPage();
    }
  }
  MrnsPopUp() {
    
    this.dialog.open(MrnAddComponent);

    this.dialog.afterAllClosed.subscribe(() => {
  
      if(this._popUpService.item != undefined){
        console.log(this._popUpService.item);
      }
    });

  }
}
