import { Injectable } from '@angular/core';
import { ISection } from '../../entity/section';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class PageService {
  private pageUrl = 'http://localhost/test/page'; // don't change this!!

  constructor(private http: Http) {}

  getPage(): Observable<ISection[]> {
    return this.http.get(this.pageUrl)
        .map((response: Response) => <ISection[]> response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
