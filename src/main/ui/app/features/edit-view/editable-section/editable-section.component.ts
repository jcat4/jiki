import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
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
  @ViewChild('title') titleText;
  @ViewChild('bodyText') bodyText;
  @ViewChild('dynamic', {read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
  @Output() report: EventEmitter<string> = new EventEmitter<string>();
  addSectionService: AddSectionService;
  isValidComponent = true;
  card: String = '_Card_';
  newSection: ISection;
  errorMessage: String;
  showAddText: boolean = false; showNestText: boolean = false; showSequenceText: boolean = false;
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
    this.showAddText = false;
    this.showNestText = false;
    this.addSectionService.setRootViewContainerRef(this.viewContainerRef);
    this.addSectionService.addDynamicComponent();
    setTimeout(() => {
        this.report.emit('update');
    }, 5000)
  }

  saveSection(section: ISection) {
    this.pageService.saveSection(section).subscribe(error => this.errorMessage = <any>error);
    this.notesService.create('Section Saved', 'The Section was successfully saved', 'success', null);
      setTimeout(() => {
          this.report.emit('update');
      }, 100);
  }

  dragStart(event, instance){
    this.pageService.draggedSection = this.section;
    this.pageService.draggedSectionClass = this;
        //event.currentTarget.attributes.class;
  }


    processText(){
      console.log('Text selected: ' + window.getSelection().toString());
     // console.log('Start: ' + document.getElementById('bodyText').selectionStart);
      //console.log('End: ' + document.getElementById('bodyText').selectionEnd);
    }

    organizeSection(){
        let draggedSection: ISection = this.pageService.draggedSection;
        draggedSection.sequenceNum = this.section.sequenceNum + 1;
        this.saveSection(draggedSection);
        this.pageService.draggedSection = null;
    }

    addNewSibling(){
        let siblingSection: ISection = <ISection>{
            id: null,
            pageID: this.pageService.currentId,
            title: "", markdown: "",
            sequenceNum: this.section.sequenceNum + 1,
            parentSequence: this.section.parentSequence,
            type: "regular"};
        this.saveSection(siblingSection);
    }

    saveChanges(){
        if(this.section.markdown != this.bodyText.nativeElement.value ||
            (this.section.title != this.titleText.nativeElement.value)) {
          this.section.title = this.titleText.nativeElement.value;
          this.section.markdown = this.bodyText.nativeElement.value;
          this.saveSection(this.section);
          console.log('Saving on mouseleave');
        }
    }


}
