import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ISection} from "../../../entity/section";
import {AddSectionService} from "../../../services/add-section.service";
import {NotificationsService} from "angular2-notifications";


@Component({
  selector: 'app-editable-section',
  templateUrl: './editable-section.component.html',
  styleUrls: ['./editable-section.component.scss']
})
export class EditableSectionComponent implements OnInit {
  @Input() section: ISection = <ISection>{id: null, page_id: null, title: "", markdown: "", sequence_num: 0, parent_sequence: 0, type: null};
  @ViewChild('orderNumBtn') orderNumberBtn;
  @ViewChild('dynamic', {read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
  addSectionService: AddSectionService;
  isValidComponent = true;
  card: String = '_Card_';
  public options = {
    position: ['center', "center"],
      timeOut: 5000,
      showProgressBar: false,
      pauseOnHover: false,
      clickToClose: true,
      maxLength: 10
  };

  constructor(service: AddSectionService, private notesService: NotificationsService) {
    this.addSectionService = service;
  }

  ngOnInit() {}

  addSection() {
    this.addSectionService.setRootViewContainerRef(this.viewContainerRef);
    this.addSectionService.addDynamicComponent();
  }

  deleteSection() {
    this.isValidComponent = false;
  }

  saveSection() {
    this.notesService.create('Section Saved', 'The Section was successfully saved', 'success', null);
  }

  updateNumber(): void {
    const text = this.orderNumberBtn.nativeElement.innerText;
    let num = parseInt(text.split(': ')[1]);
    num += 1;
    this.orderNumberBtn.nativeElement.innerText = '_Order: ' + num + '__';
  }

}
