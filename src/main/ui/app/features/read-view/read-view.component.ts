import {Component, OnInit} from '@angular/core';
import { PageService } from '../../services/page.service';
import {ISection} from "../../entity/section";
import {IPage} from "../../entity/page";


@Component({
  selector: 'app-read-view',
  templateUrl: './read-view.component.html',
  styleUrls: ['./read-view.component.scss']
})
export class ReadViewComponent implements OnInit {
  errorMessage: String;
  pageInfo: IPage;
  summaryCard: String = 'Summary Info<br/>Info 1<br/>Info 2';
  card: String = '_Navigation Panel_';

    constructor(private pageService: PageService) {}

  ngOnInit(): void {
      if(this.pageService.currentId) {
          this.pageService.getPageByID(this.pageService.currentId).subscribe(
              page => this.pageInfo = page,
              error => this.errorMessage = error);
      }
  }


}
