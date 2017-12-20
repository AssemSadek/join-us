import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CoreService } from '../services/core.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})
export class LoggedinComponent implements OnInit {
  public userName: Observable<string>;
  public userInfoObs: Observable<string>;
  public userInfo = null;
  res: string;
  public msg = "Not Specified";
  public alt = "https://image.freepik.com/free-icon/male-profile-user-shadow_318-40244.jpg";
  public eventsCreated: Observable<any>;
  public eventsAttended: Observable<any>;
  public currentEvents: Observable<any>;
  public followers: Observable<any>;
  following = null;
  constructor(private authService: AuthenticationService,
              private coreService: CoreService) { 
  }

  ngOnInit() {
    this._initState();

    this.following = [{
      "fullName": "Assem Amr Sadek",
      "username": "AssemSadek",
      "email": "assem@gmail.com"
    },
    {
      "fullName": "Lana Tarek Chafik",
      "username": "LanaChafik",
      "email": "lana@gmail.com"
    }];
  }

  /**
   * @private
   * @description
   * Initializes the component.
   */
  private _initState(): void {
    this.userName = this.authService.getUserName();
    this.userName.subscribe(data => this.res = data);
    this.userInfoObs = this.coreService.getUserInfo(this.res);
    this.userInfoObs.subscribe(data => this.userInfo = data);
    this.eventsCreated = this.getEventsCreated(this.res);
    this.eventsAttended = this.getEventsAttended(this.res);
    this.currentEvents = this.getCurrentEvents(this.res);
    this.followers = this.getFollowers(this.res);
  }

  getEventsCreated(username: string): Observable<any> {
    return this.coreService.getEventsCreated(username);
  }

  getEventsAttended(username: string): Observable<any> {
    return this.coreService.getEventsAttended(username);
  }

  getCurrentEvents(username: string): Observable<any> {
    return this.coreService.getCurrentEvents(username);
  }

  getFollowers(username: string): Observable<any> {
    return this.coreService.getFollowers(username);
  }
}
