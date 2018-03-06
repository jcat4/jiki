import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EoiService} from "./services/eoi.service";
declare var JBH360Platform: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private ngZone: NgZone, private router: Router, public eoiService: EoiService) {
  }

  ngOnInit() {
    if (window.location.pathname.toLowerCase().indexOf('jsessionid') > -1) {
      this.router.navigateByUrl(this.router.url);
    }
    this.initHeader();
  }
  private  initHeader() {
    try {
      const config = {
        hamburgerClickFunction: () => {
          this.ngZone.run(() => {
          });
        }
      };
      JBH360Platform.init(config);
    } catch (err) {
      // if header down silently handle
    }
  }
}
