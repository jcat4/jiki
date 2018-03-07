import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-view',
  templateUrl: './read-view.component.html',
  styleUrls: ['./read-view.component.scss']
})
export class ReadViewComponent implements OnInit {
  summaryCard: String = 'Summary Info<br/>Info 1<br/>Info 2';

  constructor() { }

  ngOnInit() {
  }

}
