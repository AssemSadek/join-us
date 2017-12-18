import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = null;
  public isLoggedIn: Observable<boolean>;
  constructor(private _authService: AuthenticationService) { 
  }

  ngOnInit() {
    this._initState();
    
    this.events = [{
      "photo": "https://data.whicdn.com/images/88350461/large.jpg",
      "eventName": "Coldplay",
      "eventDescription": "bla bla bla bla"
    },
    {
      "photo": "https://metrouk2.files.wordpress.com/2017/08/pri_50902887.jpg?w=748&h=498&crop=1",
      "eventName": "Christmas",
      "eventDescription": "bla bla bla bla"
    },
    {
      "photo": "https://9rm52pnjcvdzcxx3-zippykid.netdna-ssl.com/wp-content/uploads/2014/04/Lana-Del-Rey-coachella-photos.jpg",
      "eventName": "Lana Del Rey",
      "eventDescription": "bla bla bla bla"
    },
    {
      "photo": "https://9rm52pnjcvdzcxx3-zippykid.netdna-ssl.com/wp-content/uploads/2014/04/Lana-Del-Rey-coachella-photos.jpg",
      "eventName": "Lana Del Rey",
      "eventDescription": "bla bla bla bla"
    },
    {
      "photo": "https://data.whicdn.com/images/88350461/large.jpg",
      "eventName": "Coldplay",
      "eventDescription": "bla bla bla bla"
    },
    {
      "photo": "https://metrouk2.files.wordpress.com/2017/08/pri_50902887.jpg?w=748&h=498&crop=1",
      "eventName": "Christmas",
      "eventDescription": "bla bla bla bla"
    },
    {
      "photo": "https://data.whicdn.com/images/88350461/large.jpg",
      "eventName": "Coldplay",
      "eventDescription": "bla bla bla bla"
    },
    {
      "photo": "https://9rm52pnjcvdzcxx3-zippykid.netdna-ssl.com/wp-content/uploads/2014/04/Lana-Del-Rey-coachella-photos.jpg",
      "eventName": "Lana Del Rey",
      "eventDescription": "bla bla bla bla"
    }];
  }

  /**
   * @private
   * @description
   * Initializes the component.
   */
  private _initState(): void {
    this.isLoggedIn = this._authService.getLoginState();
  }

}
