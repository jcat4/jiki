import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  title: String = 'Some Interesting Topic';
  body: String = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ... There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised ... But we need something more interesting for this section eventually. Bad robot!';
  card: String = 'Card 1 content';
  constructor() { }

  ngOnInit() {
  }

}
