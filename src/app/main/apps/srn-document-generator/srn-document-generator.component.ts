import { Component, OnInit } from '@angular/core';

export interface SiteLocation {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-srn-document-generator',
  templateUrl: './srn-document-generator.component.html',
  styleUrls: ['./srn-document-generator.component.scss']
})
export class SrnDocumentGeneratorComponent implements OnInit {

  public mrnNo: number;
  public rows: Array<{mrnNo: number}> = [];

  displayedColumnsMrn: string[] = ['mrnNo'];
  //dataSourceMrn: MatTableDataSource<MrnData>;


  sitelocations: SiteLocation[] = [
    {value: 'Kampala-0', viewValue: 'Kampala'},
    {value: 'Jinja-1', viewValue: 'Jinja'},
    {value: 'Gulu-2', viewValue: 'Gulu'},
    {value: 'Lira-3', viewValue: 'Lira'},
    {value: 'Arua-4', viewValue: 'Arua'}
  ];

  constructor() { }

  ngOnInit() {
  }

  buttonClicked() {
    this.rows.push( {mrnNo: this.mrnNo } );
  }
}
