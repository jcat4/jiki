import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ISection} from "../../../entity/section";

@Component({
  selector: 'app-editable-section',
  templateUrl: './editable-section.component.html',
  styleUrls: ['./editable-section.component.scss']
})
export class EditableSectionComponent implements OnInit {
  @Input() section: ISection;
  @ViewChild('orderNumBtn') orderNumberBtn;
  constructor() { }

  ngOnInit() {}

  updateNumber(): void {
    const text = this.orderNumberBtn.nativeElement.innerText;
    let num = parseInt(text.split(': ')[1]);
    num += 1;
    this.orderNumberBtn.nativeElement.innerText = '_Order: ' + num + '__';
  }

}
