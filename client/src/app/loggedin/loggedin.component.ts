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
  public eventsCreated: Observable<any>;
  public eventsAttended: Observable<any>;
  currentEvents = null;
  following = null;
  followers = null;
  constructor(private _authService: AuthenticationService,
              private coreService: CoreService) { 
  }

  ngOnInit() {
    this._initState();

    this.currentEvents = [{
      "photo": "https://9rm52pnjcvdzcxx3-zippykid.netdna-ssl.com/wp-content/uploads/2014/04/Lana-Del-Rey-coachella-photos.jpg",
      "eventName": "Lana Del Rey",
      "eventDescription": "bla bla bla bla",
      "eventDate": "20/12/2017"
    },
    {
      "photo": "https://9rm52pnjcvdzcxx3-zippykid.netdna-ssl.com/wp-content/uploads/2014/04/Lana-Del-Rey-coachella-photos.jpg",
      "eventName": "Lana Del Rey",
      "eventDescription": "bla bla bla bla",
      "eventDate": "22/12/2017"
    }];

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

    this.followers = [{
      "fullName": "Assem Amr Sadek",
      "username": "AssemSadek",
      "email": "assem@gmail.com"
    },
    {
      "fullName": "Lana Tarek Chafik",
      "username": "LanaChafik",
      "email": "lana@gmail.com"
    },
    {
      "fullName": "Assem Amr Sadek",
      "username": "AssemSadek",
      "email": "assem@gmail.com"
    },
    {
      "fullName": "Lana Tarek Chafik",
      "username": "LanaChafik",
      "email": "lana@gmail.com"
    },
    {
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
    this.userName = this._authService.getUserName();
    this.userName.subscribe(data => this.res = data);
    this.userInfoObs = this.coreService.getUserInfo(this.res);
    this.userInfoObs.subscribe(data => this.userInfo = data);
    this.eventsCreated = this.getEventsCreated(this.res);
    this.eventsAttended = this.getEventsAttended(this.res);
  }

  getEventsCreated(username: string): Observable<any> {
    return this.coreService.getEventsCreated(username);
  }

  getEventsAttended(username: string): Observable<any> {
    return this.coreService.getEventsAttended(username);
  }
}
