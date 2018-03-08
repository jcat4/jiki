import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category/category.service";
import {PageService} from "../../services/page.service";

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
              private pageService: PageService) { }

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
}
