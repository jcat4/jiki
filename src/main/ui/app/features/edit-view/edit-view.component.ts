import {Component, OnInit} from '@angular/core';
import {PageService} from "../../services/page.service";
import {ISection} from "../../entity/section";
import {IPage} from "../../entity/page";

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {
    errorMessage: String;
    pageInfo: IPage;
    summaryCard: String = 'Summary Info<br/>Info 1<br/>Info 2';
    section: ISection; //= <ISection>{id: null, pageID: null, title: "", markdown: "", sequenceNum: 0, parentSequence: 0, type: "regular"};
    blockedDocument: boolean = false;

    constructor(private pageService: PageService) {}

    ngOnInit(): void {
        this.updateData();
    }

    deleteSection(event) {
        if(this.pageService.draggedSection != null) {
            this.pageService.draggedSectionClass.isValidComponent = false;
            this.pageService.deleteSection(this.pageService.draggedSection.id).subscribe(error => this.errorMessage = <any>error);
            this.timeOutOnUpdate();
            this.pageService.draggedSection = null;
        }
    }

    timeOutOnUpdate(){
        this.blockedDocument = true;
        setTimeout(() => {
            this.updateData();
            this.blockedDocument = false;
        }, 500);
    }

    updateData(){
        if(this.pageService.currentId) {
            this.pageService.getPageByID(this.pageService.currentId).subscribe(
                page => {
                    this.pageInfo = page;
                    this.section = <ISection>{
                        id: null,
                        pageID: this.pageInfo.id,
                        title: "",
                        markdown: "",
                        sequenceNum: 0,
                        parentSequence: 0,
                        type: "regular"
                    };
                },
                error => this.errorMessage = error
            );
        }
    }

}
