import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

    @Input() public items;
    @Input() public path;


  constructor() { }

  ngOnInit() {console.log(this.path);
  }

}
