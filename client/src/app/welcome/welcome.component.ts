import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  events = null;
  constructor() { }

  ngOnInit() {
    this.events = [{
      "photo": "https://data.whicdn.com/images/88350461/large.jpg",
      "eventName": "Coldplay",
      "eventDescription": "Coldplay Concert"
    },
    {
      "photo": "https://metrouk2.files.wordpress.com/2017/08/pri_50902887.jpg?w=748&h=498&crop=1",
      "eventName": "Christmas",
      "eventDescription": "Christmas Carols"
    },
    {
      "photo": "https://9rm52pnjcvdzcxx3-zippykid.netdna-ssl.com/wp-content/uploads/2014/04/Lana-Del-Rey-coachella-photos.jpg",
      "eventName": "Lana Del Rey",
      "eventDescription": "Lana Del Rey concert"
    }];
  }

}
