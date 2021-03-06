import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CoreService } from '../services/core.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})
export class LoggedinComponent implements OnInit {
  public userName: Observable<string>;
  public userInfoObs: Observable<string>;
  public userType: Observable<string>;
  public adminFlag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public adminFlagObs: Observable<boolean>;
  public userInfo = null;
  res: string;
  public msg = "Not Specified";
  public alt = "https://image.freepik.com/free-icon/male-profile-user-shadow_318-40244.jpg";
  public eventsCreated: Observable<any>;
  public eventsAttended: Observable<any>;
  public currentEvents: Observable<any>;
  public followers: Observable<any>;
  public following: Observable<any>;
  public reports: Observable<any>;
  constructor(private authService: AuthenticationService,
              private coreService: CoreService) { 
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
    this.userName = this.authService.getUserName();
    this.userName.subscribe(data => this.res = data);
    this.userInfoObs = this.coreService.getUserInfo(this.res);
    this.userInfoObs.subscribe(data => this.userInfo = data);
    this.eventsCreated = this.getEventsCreated(this.res);
    this.eventsAttended = this.getEventsAttended(this.res);
    this.currentEvents = this.getCurrentEvents(this.res);
    this.followers = this.getFollowers(this.res);
    this.following = this.getFollowing(this.res);
    this.userType = this.coreService.getUserType(this.res);
    this.userType.subscribe(data => {if (data[0]["Type"] == 'Admin'){
                                        this.adminFlag.next(true);
                                      }
                                      this.adminFlagObs = this.adminFlag.asObservable();
                                    })
    this.reports = this.getReports();                               
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

  getFollowing(username: string): Observable<any> {
    return this.coreService.getFollowing(username);
  }

  getReports(): Observable<any> {
    return this.coreService.getReports();
  }
}
