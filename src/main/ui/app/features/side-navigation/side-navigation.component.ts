import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  public items = [
      {
        name: 'Getting Started'
      },
      {
        name: 'Business Documentation',
        open: true,
        children: [
            {
                name: 'Scheduling'
            },
            {
                name: 'CDRAP',
            },
            {
                name: 'Some other app'
            }
        ]
      },
      {
        name: 'Developer Documentation'
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
