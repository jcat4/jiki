import { Injectable } from '@angular/core';
import { ISection } from '../entity/section';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {IPage} from "../entity/page";


@Injectable()
export class PageService {
  //private pageUrl = 'http://localhost:5000/test/page'; // don't change this!!
  private pageUrl = 'https://jiki-hackathon.herokuapp.com/test/page'; // don't change this!!

  constructor(private http: Http) {}

  getPageTest(): Observable<ISection[]> {
    return this.http.get(this.pageUrl)
        .map((response: Response) => <ISection[]> response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }

    getPageByID(id: number): Observable<IPage> {
        return this.http.get('https://jiki-hackathon.herokuapp.com/pages/page/' + id)
            .map((response: Response) => <IPage> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveSection(section: ISection): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers });
      return this.http.post('https://jiki-hackathon.herokuapp.com/sections', section, options)
          .catch(this.handleError);
    }

    deleteSection(id: number): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers });
        return this.http.delete('https://jiki-hackathon.herokuapp.com/sections/' + id, options)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
