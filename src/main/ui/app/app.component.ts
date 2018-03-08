import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from "primeng/api";
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
    public items = [
        {
            name: 'Home Page'
        },
        {
            name: 'Categories',
            children: [{
                name: 'Business Documentation',
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
                }]
        }
    ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (window.location.pathname.toLowerCase().indexOf('jsessionid') > -1) {
      this.router.navigateByUrl(this.router.url);
    }
      //this.currentPath = window.location.href.split('.com/')[1].substring(0,window.location.href.split('.com/')[1].length - 4);
      this.menuItems = [
        {label: 'Read', icon: 'fa-eye', routerLink: 'read'},
        {label: 'Edit', icon: 'fa-pencil', routerLink: 'edit'}];
  }
}
