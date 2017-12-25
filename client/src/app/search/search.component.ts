import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchQuery: string;
  events = null;
  users = null;

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => 
      this.searchQuery = params["searchQuery"]
    );
  }

  ngOnInit() {
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

    this.users = [{
      "photo": "https://data.whicdn.com/images/88350461/large.jpg",
      "fullName": "Assem Amr Sadek",
      "username": "@AssemSadek"
    },
    {
      "photo": "https://data.whicdn.com/images/88350461/large.jpg",
      "fullName": "Assem Amr Sadek",
      "username": "@AssemSadek"
    }];
  }

}
