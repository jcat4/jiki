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
      this.menuItems = [
        {label: 'Read', icon: 'fa-eye', routerLink: 'read'},
        {label: 'Edit', icon: 'fa-pencil', routerLink: 'edit'}];
  }
}
