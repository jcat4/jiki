import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ISection} from "../../../entity/section";
import {AddSectionService} from "../../../services/add-section.service";
import {NotificationsService} from "angular2-notifications";
import {PageService} from "../../../services/page.service";


@Component({
  selector: 'app-editable-section',
  templateUrl: './editable-section.component.html',
  styleUrls: ['./editable-section.component.scss']
})
export class EditableSectionComponent implements OnInit {
  @Input() section: ISection = <ISection>{id: null, pageID: null, title: "", markdown: "", sequenceNum: 0, parentSequence: 0, type: null};
  @ViewChild('orderNumBtn') orderNumberBtn;
  @ViewChild('title') titleText;
  @ViewChild('body') bodyText;
  @ViewChild('dynamic', {read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
  addSectionService: AddSectionService;
  isValidComponent = true;
  card: String = '_Card_';
  newSection: ISection;
  errorMessage: String;
  public options = {
    position: ['center', "center"],
      timeOut: 5000,
      showProgressBar: false,
      pauseOnHover: false,
      clickToClose: true,
      maxLength: 10
  };

  constructor(service: AddSectionService,
              private notesService: NotificationsService,
              private pageService: PageService) {
    this.addSectionService = service;
  }

  ngOnInit() {}

  addSection() {
    this.addSectionService.setRootViewContainerRef(this.viewContainerRef);
    this.addSectionService.addDynamicComponent();
  }

  deleteSection() {
    this.isValidComponent = false;
    this.notesService.create('Section Deleted', 'The Section was successfully deleted', 'error', null);
  }

  saveSection() {
    this.newSection = (this.section.type == null) ?
        <ISection>{id: null, pageID: 1, title: this.titleText.nativeElement.value, markdown: this.bodyText.nativeElement.value, sequenceNum: 1, parentSequence: 1, type: "regular"} :
        <ISection>{id: this.section.id, pageID: this.section.pageID, title: this.titleText.nativeElement.value, markdown: this.bodyText.nativeElement.value, sequenceNum: parseInt(this.orderNumberBtn.nativeElement.innerText.split(': ')[1]), parentSequence: 1, type: "regular"};
    this.pageService.saveSection(this.newSection).subscribe(error => this.errorMessage = <any>error);
    this.notesService.create('Section Saved', 'The Section was successfully saved', 'success', null);
  }

  updateNumber(): void {
    const text = this.orderNumberBtn.nativeElement.innerText;
    let num = parseInt(text.split(': ')[1]);
    num += 1;
    this.orderNumberBtn.nativeElement.innerText = '_Order: ' + num + '__';
  }

}
