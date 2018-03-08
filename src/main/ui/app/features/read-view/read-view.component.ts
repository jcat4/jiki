import {Component, OnInit} from '@angular/core';
import { PageService } from '../../services/page.service';
import {ISection} from "../../entity/section";


@Component({
  selector: 'app-read-view',
  templateUrl: './read-view.component.html',
  styleUrls: ['./read-view.component.scss']
})
export class ReadViewComponent implements OnInit {
  errorMessage: String;
  pageInfo: ISection[];
  summaryCard: String = 'Summary Info<br/>Info 1<br/>Info 2';

    constructor(private pageService: PageService) {}

  ngOnInit(): void {
      this.pageService.getPage().subscribe(
          page => this.pageInfo = page,
          error => this.errorMessage = error);
  }

}
