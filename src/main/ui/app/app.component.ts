import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from "primeng/api";
import {CategoryService} from "./services/category/category.service";
declare var JBH360Platform: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  menuItems: MenuItem[];
  currentPath: String;
  public path = '/page/';

    constructor(private router: Router, public categoryService: CategoryService) {
  }

  ngOnInit() {
      let initPath = window.location.pathname;
      initPath = initPath.substring(0, initPath.length - 4)
      this.menuItems = [
        {label: 'Read', icon: 'fa-eye',
            routerLinkActiveOptions: {exact:true}, routerLink: initPath +'read'},
        {label: 'Edit', routerLinkActiveOptions: {exact:true}, icon: 'fa-pencil', routerLink: initPath + 'edit'}];
  }
}
