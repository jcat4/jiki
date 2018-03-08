import {Component, Input, OnInit} from '@angular/core';
import {ISection} from "../../../entity/section";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section: ISection;
  constructor() { }

  ngOnInit() {}

}
