import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ISection} from "../../../entity/section";
import {AddSectionService} from "../add-section.service";


@Component({
  selector: 'app-editable-section',
  templateUrl: './editable-section.component.html',
  styleUrls: ['./editable-section.component.scss']
})
export class EditableSectionComponent implements OnInit {
  @Input() section: ISection = <ISection>{"title": "", "body":"", "card":"", "sequenceNumber":1};
  @ViewChild('orderNumBtn') orderNumberBtn;
  @ViewChild('dynamic', {read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
  addSectionService: AddSectionService;
  isValidComponent = true;

  constructor(service: AddSectionService) {
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

  updateNumber(): void {
    const text = this.orderNumberBtn.nativeElement.innerText;
    let num = parseInt(text.split(': ')[1]);
    num += 1;
    this.orderNumberBtn.nativeElement.innerText = '_Order: ' + num + '__';
  }

}
