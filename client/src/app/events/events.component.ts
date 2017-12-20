import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { CoreService } from '../services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public isLoggedIn: Observable<boolean>;
  public events: Observable<any>;
  constructor(private authService: AuthenticationService,
              private coreService: CoreService,
              private router: Router) { 
  }

  ngOnInit() {
    this._initState();
  }

  /**
   * @private
   * @description
   * Initializes the component.
   */
  private _initState(): void {
    this.isLoggedIn = this.authService.getLoginState();
    this.events = this.getEvents();
  }

  getEvents(): Observable<any> {
    return this.coreService.getEvents();
  }

  viewEvent(title) {
    this.router.navigate(['view-event']);
  }

}
