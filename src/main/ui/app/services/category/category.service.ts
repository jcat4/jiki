import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class CategoryService {

  public directoryItems: any = [
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

  public markdownItems = [
      {title: 'Some Interesting Topic',
        body: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ... There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised ... But we need something more interesting for this section eventually. Bad robot!'}
  ];

    constructor(private http: HttpClient) {
            this.getDirectoryItems();
    }

    public getDirectoryItems() {
        this.http.get('categories').subscribe(data => {
            // Read the result field from the JSON response.
            this.directoryItems = data;
            this.directoryItems.forEach((element) => {

            if(element.children)
            {
                if(element.page)
                {
                    element.page.forEach((page) => {
                        element.children.push(page);
                });
                }
            }
            else{
                element.children = element.page;
            }
            });
            console.log(this.directoryItems);
        });
    }

    public getDirectoryPagesDirect(element) {
        this.http.get('pages/' + element.categoryID).subscribe(data => {
            // Read the result field from the JSON response.
            element.children = data;
        });
    }

    public addDirectoryPage(title,categoryID)
    {
        const params = {
            categoryId: categoryID,
            title: title
        };
        this.http.post('pages', params).subscribe(data => {
            window.location.reload(true);
        });
    }


}
