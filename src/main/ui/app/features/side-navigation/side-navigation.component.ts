import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category/category.service";
import {PageService} from "../../services/page.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

    @Input() public items;
    @Input() public path;
    public title ='';


  constructor(public categoryService: CategoryService,
              private pageService: PageService,
              private router: Router) { }

  ngOnInit() {}

  route(id){
      this.pageService.currentId = id;
      console.log(this.pageService.currentId);
  }
    dropdownHandler(event, item){
      item.open = !item.open;
      event.stopPropagation();

      if(item.children) {
          item.children.forEach((element) => {
              if (element.children == null && !element.id) {
                  this.categoryService.getDirectoryPagesDirect(element);
              }
          });
      }
  }

    createPage(item, event)
    {

        item.create = false;
        if(this.title !== '')
        this.categoryService.addDirectoryPage(this.title,item.categoryID);
        event.stopPropagation();
        this.title = '';

    }

    refreshPage(id: number){
        this.route(id);
        if(window.location.href.indexOf('read') > -1) {
            this.router.navigate(['/', 'edit']);
        } else {
            this.router.navigate(['/', '/read']);
        }
        setTimeout(() => {
            this.router.navigate(['/', '/read']);
        }, 10);
    }
}
