import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mrn-details',
  templateUrl: './mrn-details.component.html',
  styleUrls: ['./mrn-details.component.scss']
})
export class MrnDetailsComponent implements OnInit {

  sub:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route
      .data
      .subscribe(v => console.log(v));
      console.log(this.route.snapshot.paramMap.get('id'));
  }

}
