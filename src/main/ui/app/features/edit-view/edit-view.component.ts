import { Component, OnInit } from '@angular/core';
import {PageService} from "../../services/page.service";
import {ISection} from "../../entity/section";

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {
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
