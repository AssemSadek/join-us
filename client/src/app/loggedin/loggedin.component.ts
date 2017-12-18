import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})
export class LoggedinComponent implements OnInit {
  public userName: Observable<string>;
  eventsCreated = null;
  eventsAttended = null;
  currentEvents = null;
  following = null;
  followers = null;
  constructor(private _authService: AuthenticationService) { 
  }

  ngOnInit() {
    this._initState();
    this.eventsCreated = [{
      "photo": "https://data.whicdn.com/images/88350461/large.jpg",
      "eventName": "Coldplay",
      "eventDescription": "bla bla bla bla",
      "eventDate": "18/12/2017"
    },
    {
      "photo": "https://metrouk2.files.wordpress.com/2017/08/pri_50902887.jpg?w=748&h=498&crop=1",
      "eventName": "Christmas",
      "eventDescription": "bla bla bla bla",
      "eventDate": "18/12/2017"
    },
    {
      "photo": "https://9rm52pnjcvdzcxx3-zippykid.netdna-ssl.com/wp-content/uploads/2014/04/Lana-Del-Rey-coachella-photos.jpg",
      "eventName": "Lana Del Rey",
      "eventDescription": "bla bla bla bla",
      "eventDate": "18/12/2017"
    },
    {
      "photo": "https://9rm52pnjcvdzcxx3-zippykid.netdna-ssl.com/wp-content/uploads/2014/04/Lana-Del-Rey-coachella-photos.jpg",
      "eventName": "Lana Del Rey",
      "eventDescription": "bla bla bla bla",
      "eventDate": "18/12/2017"
    }];

    this.eventsAttended = [{
      "photo": "https://9rm52pnjcvdzcxx3-zippykid.netdna-ssl.com/wp-content/uploads/2014/04/Lana-Del-Rey-coachella-photos.jpg",
      "eventName": "Lana Del Rey",
      "eventDescription": "bla bla bla bla",
      "eventDate": "10/12/2017"
    }];

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
  }
}
